from django import forms
from .models import Posts, Categories


class AddPostForm(forms.ModelForm):
	class Meta:
		model = Posts
		fields = '__all__'