from ninja import NinjaAPI


api = NinjaAPI()

@api.get("/hello")
def hello(request):
    print("hello")
    return "hello"