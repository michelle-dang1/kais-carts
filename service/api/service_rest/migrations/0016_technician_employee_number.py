# Generated by Django 4.0.3 on 2022-12-09 16:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0015_remove_technician_employee_number'),
    ]

    operations = [
        migrations.AddField(
            model_name='technician',
            name='employee_number',
            field=models.PositiveIntegerField(default=1, unique=True),
            preserve_default=False,
        ),
    ]
