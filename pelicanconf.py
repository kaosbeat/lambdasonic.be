AUTHOR = 'lambdasonic'
SITENAME = 'lambdasonic'
# SITEURL = 'https://www.kaotec.org/www.lambdasonic.be'
SITEURL = ''
THEME = 'themes/lambda'
PATH = 'content'
PAGES_PATH = ['pages' ]
TIMEZONE = 'Europe/Rome'
ARTICLES_PATH = ['events', 'coders']
STATIC_PATHS = ['files']
DEFAULT_LANG = 'en'
DISPLAY_CATEGORIES_ON_MENU = False
DISPLAY_PAGES_ON_MENU = False
# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None
ARTICLE_URL = '{category}/{slug}/'
ARTICLE_SAVE_AS = '{category}/{slug}/index.html'
PAGE_URL = '{slug}/'
PAGE_SAVE_AS = '{slug}/index.html'
MENUITEMS = (('about', '/'), ('coders', '/coders'), ('events', '/events'))
DIRECT_TEMPLATES = ['index','coders', 'events']


# Blogroll
LINKS = (('H.AL.I.C.', 'https://halic.be'),
        )

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = False

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True