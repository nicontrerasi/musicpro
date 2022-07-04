from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'mainapp/index.html', {
        'title': 'Productos'
    })
    
def carrito(request):
    return render(request, 'mainapp/carrito.html', {
        'title': 'Carrito'
    })