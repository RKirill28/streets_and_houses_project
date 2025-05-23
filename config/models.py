from django.db import models


class DefaultConfig(models.Model):
	project_name = models.CharField(verbose_name='Название проекта', max_length=255, default='')
	project_text = models.TextField(verbose_name='Текст о проекте', default='')
	project_preview = models.ImageField(verbose_name='Превью проекта', upload_to='photos/', default='')
	
	def __str__(self):
		return 'Конфигурация'

	class Meta:
		verbose_name = 'Конфигурация сайта'
		verbose_name_plural = 'Конфигурации сайта'


class Participant(models.Model):
	first_name = models.CharField(verbose_name='Имя', max_length=255, default='')
	last_name = models.CharField(verbose_name='Фамилия', max_length=255, default='')

	
	def __str__(self):
		return f'{self.last_name} {self.first_name}'
	
	class Meta:
		verbose_name = 'Участник проекта'
		verbose_name_plural = 'Участники проекта'
