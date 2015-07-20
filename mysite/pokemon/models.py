#coding=utf8
from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class pokemon(models.Model):
    poke_id = models.PositiveIntegerField(u'编号', primary_key = True, max_length = 5)
    ch_name = models.CharField(u'中文名字', max_length = 20)
    jp_name = models.CharField(u'日文名字', blank = True, max_length = 20)
    en_name = models.CharField(u'英文名字', blank = True, max_length = 20)
    height = models.FloatField(u'身高', blank = True, max_length = 10)
    weight = models.FloatField(u'体重', blank = True, max_length = 10)
    poke_property = models.CharField(u'宠物属性', blank = True, max_length = 10)
    poke_type = models.CharField(u'宠物分类', blank = True, max_length = 10)
    poke_class = models.CharField(u'宠物特性', blank = True, max_length = 20)
    male = models.PositiveIntegerField(u'雄性比例', blank = True, max_length = 4)
    female = models.PositiveIntegerField(u'雌性比例', blank = True, max_length = 4)
    catch = models.FloatField(u'捕获度', blank = True, max_length = 4)
    hp = models.PositiveIntegerField(u'HP', blank = True, max_length = 4)
    attack = models.PositiveIntegerField(u'攻击', blank = True, max_length = 4)
    defence = models.PositiveIntegerField(u'防御', blank = True, max_length = 4)
    super_attack = models.PositiveIntegerField(u'特攻', blank = True, max_length = 4)
    super_defence = models.PositiveIntegerField(u'特防', blank = True, max_length = 4)
    speed = models.PositiveIntegerField(u'速度', blank = True, max_length = 4)
    pre = models.OneToOneField('pokemon', related_name = 'poke_next', blank = True, null=True, verbose_name = u"进化前")
    next = models.OneToOneField('pokemon', related_name = 'poke_pre', blank = True, null=True, verbose_name = u"进化后")

    def __unicode__(self):
        return self.ch_name
	

class thread(models.Model):
    classifyChoice = (
        (u'AN', u'Announcement'),
        (u'SH', u'Share'),   
        (u'GA', u'Game'), 
        (u'CA', u'Tucao'), 
    )
    title = models.CharField(u'标题', max_length=100)
    content = models.TextField(u'内容')
    readCount = models.PositiveIntegerField(u'浏览次数')
    likeCount = models.PositiveIntegerField(u'赞')
    classify = models.CharField(u'分类', choices=classifyChoice, max_length=3)
    time = models.DateTimeField(u'发帖时间')
    lastTime = models.DateTimeField(u'最新修改时间')
    author = models.ForeignKey(User)

    class Meta:
        ordering = ['-time']

    def __unicode__(self):
        return self.title

class comment(models.Model):
    content = models.TextField(u'评论内容')
    author = models.ForeignKey(User)
    time = models.DateTimeField(u'评论时间')
    belongTo = models.ForeignKey(thread, related_name='comment')
    likeCount = models.PositiveIntegerField(u'赞')

    class Meta:
        ordering = ['-time']

class myUser(models.Model):
    genderChoice = (
        (u'M', u'Male'),
        (u'F', u'Female'),
    )
    user = models.OneToOneField(User, related_name='myUser')
    favouritePM = models.ForeignKey(pokemon, blank=True, null=True)
    threadCount = models.PositiveIntegerField(u'发帖数')
    commentCount = models.PositiveIntegerField(u'评论数')
    gender = models.CharField(u'性别', choices=genderChoice, blank=True, max_length=2)