from rest_framework import serializers

from .models import  Person, post

class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = '__all__'
        depth =1

    posts = serializers.SerializerMethodField()
    def get_posts(self, obj):
        return obj.post_set.values()
class postSerializer(serializers.ModelSerializer):
    class Meta:
        model = post
        fields = '__all__'

