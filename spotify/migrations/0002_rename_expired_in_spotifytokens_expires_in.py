# Generated by Django 5.1.1 on 2024-11-12 17:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('spotify', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='spotifytokens',
            old_name='expired_in',
            new_name='expires_in',
        ),
    ]