# Generated by Django 4.0.3 on 2022-12-07 15:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0003_rename_name_salesperson_sales_person'),
    ]

    operations = [
        migrations.AlterField(
            model_name='potentialcustomer',
            name='phone_number',
            field=models.PositiveBigIntegerField(),
        ),
    ]