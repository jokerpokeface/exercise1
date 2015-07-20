#coding=utf8
from django.shortcuts import render
from django.shortcuts import render_to_response
from django.http import HttpResponse, Http404
import django.contrib.staticfiles
from models import pokemon, thread, comment, myUser
from django.core import serializers
import json
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.core.exceptions import ObjectDoesNotExist
from django.db.models import Max, Avg, Min
from django.core.context_processors import csrf
from django.views.decorators.csrf import csrf_protect, csrf_exempt
import datetime

# Create your views here.

#主页
def home(request):
	return render_to_response('Home.html')


def search(request):
    if request.user.is_authenticated():
        logged = request.user.username
        return render_to_response('pokemon_search.html', {'username': logged})
    else: 
        return render_to_response('pokemon_search.html', {'username': ''})

def detail(request):
    if request.user.is_authenticated():
        logged = request.user.username
    else: 
        logged = ''
    name = request.GET.get('input_name', '')
    ajax = request.GET.get('ajax', '')
    destination = pokemon.objects.filter(ch_name = name)   #查找需要查询的神奇宝贝
    temp = serializers.serialize('json', destination)      #转换成json
    if len(destination) == 1:
        para = destination[0]
        if ajax == "true":
            return HttpResponse(temp)
        else:
            return render_to_response('pokemon_detail.html', {'pokemon': para, 'username': logged})
    else:
        if ajax == "true":
            return HttpResponse(temp)
        return HttpResponse(name + "Not found")

def list(request):
    if request.user.is_authenticated():
        logged = request.user.username
    else: 
        logged = ''
    mapping_type = {'seed': '种子', \
                    'turtlet': '龟', \
                    'flame': '火焰', \
                    'rat': '鼠'}
    mapping_property = {'fly': '飞行', \
                        'water': '水', \
                        'grass': '草', \
                        'poison': '毒'}

    via = request.GET.get('via', '')
    what = request.GET.get('what', '')

    if via == 'type':
        destination = pokemon.objects.filter(poke_type__contains = mapping_type[what]).order_by('poke_id')
    elif via == 'property':
        destination = pokemon.objects.filter(poke_property__contains = mapping_property[what]).order_by('poke_id')
    elif via == 'id':
        if what == '1':
            destination = pokemon.objects.filter(poke_id__lte = 100).order_by('poke_id')
        if what == '2':
            destination = pokemon.objects.filter(poke_id__lte = 200).filter(poke_id__gte = 101).order_by('poke_id')
        if what == '3':
            destination = pokemon.objects.filter(poke_id__lte = 300).filter(poke_id__gte = 201).order_by('poke_id')
        if what =='4':
            destination = pokemon.objects.filter(poke_id__gte = 301).filter(poke_id__lte = 400).order_by('poke_id')
        if what == '5':
            destination = pokemon.objects.filter(poke_id__gte = 401).filter(poke_id__lte = 500).order_by('poke_id')
        if what == '6':
            destination = pokemon.objects.filter(poke_id__gte = 501).filter(poke_id__lte = 600).order_by('poke_id')
        if what == '7':
            destination = pokemon.objects.filter(poke_id__gte = 601).order_by('poke_id')
    result = []
    for item in destination:
        if item.poke_id < 10 and item.poke_id > 0:                     #将id转换成字符串，并补零
            i = '#00' + str(item.poke_id)
        elif item.poke_id > 10 and item.poke_id < 99:
            i = '#0' + str(item.poke_id)
        else:
            i = '#' + str(item.poke_id)
        temp = {'id': i, 'ch_name': item.ch_name, 'type': item.poke_type, 'property': item.poke_property}
        result.append(temp)
    return render_to_response('pokemon_list.html', {'pokemons': result, 'length': len(destination), 'username': logged})   


def mylogin(request):
    name = request.POST.get('name', '')
    password = request.POST.get('password', '')
    user = authenticate(username = name, password = password)
    if user is not None and user.is_active:       #判断帐号密码是否匹配 和 帐号是否被激活
        login(request, user)
        return HttpResponse('login ok')
    else:
        return HttpResponse('login error')


def register(request):
    name = request.POST.get('name', '')
    password = request.POST.get('password', '')
    mail = request.POST.get('mail', '')
    try:
        User.objects.get(username = name)
    except ObjectDoesNotExist:
        user = User.objects.create_user(username = name, password = password, email = mail)
        myuser = myUser(threadCount=0, commentCount=0)
        myuser.user = user
        myuser.save()
        return HttpResponse('register ok')
    return HttpResponse('the name has alerady been registered')

def mylogout(request):
    logout(request)
    return HttpResponse('logout ok')

def test(request):
    word = request.GET['word']
    ch_contain = pokemon.objects.filter(ch_name__contains = word).values('ch_name')
    en_contain = pokemon.objects.filter(en_name__contains = word).values('en_name')
    jp_contain = pokemon.objects.filter(jp_name__contains = word).values('jp_name')
    result = []
    for poke in ch_contain:
        result.append(poke['ch_name'] + ' ')
    for poke in en_contain:
        result.append(poke['en_name'] + ' ')
    for poke in jp_contain:
        result.append(poke['jp_name'] + ' ')
    print result
    return HttpResponse(result)

def about(request):
    if request.method == 'POST':
        pass

    if request.user.is_authenticated():
        logged = request.user.username
    else: 
        logged = ''
    return render_to_response('about.html', {'username': logged})

@csrf_protect
def forum(request):
    if request.user.is_authenticated():
        logged = request.user.username
    else: 
        logged = ''

    if request.method == 'GET':
        announcement = thread.objects.filter(classify='AN')
        return render_to_response('forum.html', {'username': logged, 'threadList':announcement})

    elif request.method == 'POST':
        classify = request.POST.get('classify', None)
        if classify is None:
            raise Http404
        threadList = thread.objects.filter(classify=classify)
        return render_to_response('parts/threadList.html', {'threadList': threadList})

    return render_to_response('forum.html', {'username': logged})

@csrf_protect
def threadDetail(request):
    threadId = request.POST.get('Tid', None)
    if threadId is None:
        raise Http404
    try:
        Thread = thread.objects.get(id=threadId)
    except thread.DoesNotExist:
        raise Http404
    Thread.readCount = Thread.readCount + 1
    Thread.save()
    comments = Thread.comment.all()
    return render_to_response('parts/threadDetail.html', {'thread': Thread, 'comments': comments})

@csrf_protect
def submitThread(request):
    if request.user.is_authenticated():
        user = request.user
        classify = request.POST.get('classify', '')
        title = request.POST.get('title', '')
        content = request.POST.get('content', '')
        if classify == '' or title == '' or content == '':
            return HttpResponse('some fields are empty')
        if classify == 'AN' and not user.is_staff:
            return HttpResponse('you are not manager')
        newThread = thread(title=title, content=content, readCount=0, likeCount=0, classify=classify, time=datetime.datetime.now(), lastTime=datetime.datetime.now())
        newThread.author = user
        newThread.save()
        return HttpResponse('ok')

    
    else:
        return HttpResponse('please login')

@csrf_protect
def submitComment(request):
    if request.user.is_authenticated():
        user = request.user
        content = request.POST.get('content', '')
        if content == '':
            return HttpResponse('comment can not be empty')
        Tid = request.POST.get('Tid', '')
        if Tid == '':
            raise Http404
        try:
            Thread = thread.objects.get(id=Tid)
        except thread.DoesNotExist:
            return HttpResponse('thread not found')
        Comment = comment(content=content, time=datetime.datetime.now(), likeCount=0)
        Comment.author = user
        Comment.belongTo = Thread
        Comment.save()
        return HttpResponse('ok')
    else:
        return HttpResponse('please login')

@csrf_protect
def like(request):
    if request.user.is_authenticated():
        user = request.user
        Tid = request.POST.get('Tid', '')
        if Tid == '':
            raise Http404
        try:
            Thread = thread.objects.get(id=Tid)
        except thread.DoesNotExist:
            return HttpResponse('thread not found')
        what = request.POST.get('what', '')
        if what == 'thread':
            Thread.likeCount = Thread.likeCount + 1
            Thread.save()
            return HttpResponse('ok')
        else:
            raise Http404

    else:
        return HttpResponse('please login')

@csrf_protect
def threadSearch(request):
    if request.method == 'POST':
        key = request.POST.get('key', '')
        classify = request.POST.get('classify', '')
        threadList = thread.objects.filter(title__icontains=key).filter(classify=classify)
        return render_to_response('parts/threadList.html', {'threadList': threadList})
    else:
        raise Http404

@csrf_protect
def userInfo(request):
    if not request.user.is_authenticated():
        return HttpResponse('please login')
    user = request.user
    myuser = user.myUser
    if request.method == 'GET':
        return render_to_response('user_info.html', {'user': user, 'username': user.username, 'myuser': myuser})
    elif request.method == 'POST':
        choice = {'male': 'M', 'female': 'F'}
        email = request.POST.get('email', '')
        gender = request.POST.get('gender', '').lower()
        like = request.POST.get('like', '')
        oldpsw = request.POST.get('oldpsw', '')
        psw = request.POST.get('psw', '')
        pswagain = request.POST.get('pswagain', '')
        if email:
            user.email = email
        if gender:
            if gender in choice.keys():
                myuser.gender = choice[gender]
            else:
                return HttpResponse('请按要求填写性别')
        if like:
            try:
                pokemonLike = pokemon.objects.get(ch_name=like)
            except pokemon.DoesNotExist:
                return HttpResponse('pokemon not found')
            myuser.favouritePM = pokemonLike
        if psw and psw != pswagain:
            return HttpResponse('新密码错误')
        elif psw and psw == pswagain:
            if user.check_password(oldpsw):
                user.set_password(psw)
            else:
                return HttpResponse('密码修改失败')
        user.save()
        myuser.save()
        return HttpResponse('ok')
    else:
        raise Http404

@csrf_protect
def history(request):
    if request.user.is_authenticated():
        logged = request.user.username
    else: 
        logged = ''
    return render_to_response('pokemon_history.html', {'username': logged})

@csrf_protect
def historyDetail(request):
    if request.user.is_authenticated():
        logged = request.user.username
    else: 
        logged = ''
    return render_to_response('pokemon_history_detail.html', {'username': logged})

import sys
import StringIO
def syncdb(request):
    #重定向标准输出重定向到内存的字符串缓冲(由StringIO模块提供)
    saveout = sys.stdout
    log_out = StringIO.StringIO()  
    sys.stdout = log_out 
    #利用django提供的命令行工具来执行“manage.py syncdb”
    from django.core.management import execute_from_command_line
    execute_from_command_line(["manage.py", "syncdb", "--noinput"])
    #获得“manage.py syncdb”的执行输出结果，并展示在页面
    result = log_out.getvalue()
    sys.stdout = saveout
    return HttpResponse(result.replace("\n","<br/>"))