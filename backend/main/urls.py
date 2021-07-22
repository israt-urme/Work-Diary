from rest_framework import routers
from .api import PlaceViewSet

router = routers.DefaultRouter()
router.register('api/main', PlaceViewSet, 'main')

urlpatterns = router.urls