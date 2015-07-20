import settings
from django.conf.urls import patterns, include, url
from pokemon.views import home, search, detail, list, mylogin, register, mylogout, test, about, forum, threadDetail, \
                          submitThread, submitComment, like, threadSearch, userInfo, history, historyDetail
from django.contrib import admin
from django.contrib.staticfiles.urls import staticfiles_urlpatterns


admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'mysite.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^static/(?P<path>.*)$','django.views.static.serve',{'document_root':settings.STATIC_ROOT}, name='static'),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^home/$', home),
    url(r'^$', home),
    url(r'^list/$', list),
    url(r'^search/$', search),
    url(r'^detail/$', detail),
    url(r'^mylogin/$', mylogin),
    url(r'^mylogout/$', mylogout),
    url(r'^register/$', register),
    url(r'^test/$', test),
    url(r'^about/$', about),
    url(r'^forum/$', forum),
    url(r'^threadDetail/$', threadDetail),
    url(r'^submitThread/$', submitThread),
    url(r'^submitComment/$', submitComment),
    url(r'^like/$', like),
    url(r'^threadSearch/$', threadSearch),
    url(r'^userInfo/$', userInfo),
    url(r'^history/$', history),
    url(r'^historyDetail/$', historyDetail),
)



