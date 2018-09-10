// #include <napi.h>
// #include "Connector.h"

// Napi::Object Init(Napi::Env env, Napi::Object exports) {
//     Connector::Init(env, exports);
//     return exports;
// }


#include <string>
#include <napi.h>
#include <RCS.h>

struct Obj {
    std::string name;
    double age;
    std::string password;
    std::string role;
};

Napi::Value CopyArray(Napi::CallbackInfo& info) {
    auto env = info.Env();
    auto arr = info[0].As<Napi::Array>();
    auto nativeArr = new Obj[arr.Length()];

    for(size_t i = 0; i < arr.Length(); i++)
    {
        auto obj = arr.Get(i).As<Napi::Object>();
        auto cppObj = Obj({
            obj.Get("name").As<Napi::String>().operator std::string(),
            obj.Get("age").As<Napi::Number>().DoubleValue(),
            obj.Get("password").As<Napi::String>().operator std::string(),
            obj.Get("role").As<Napi::String>().operator std::string(),
        });
        nativeArr[i] = cppObj;
    }

    auto newArr = Napi::Array::New(env, arr.Length());
    for(size_t i = 0; i < arr.Length(); i++)
    {
        auto cppObj = nativeArr[i];
        auto newObj = Napi::Object::New(env);
        newObj.Set("name", cppObj.name);
        newObj.Set("age", cppObj.age);
        newObj.Set("password", cppObj.password);
        newObj.Set("role", cppObj.role);
        newArr.Set(i, newObj);
    }

    return newArr;
}

Napi::Value Test(Napi::CallbackInfo& info) {
    auto env = info.Env();
    auto obj = info[0].As<Napi::Object>();
    auto cppObj = Obj({
        obj.Get("name").As<Napi::String>().operator std::string(),
        obj.Get("age").As<Napi::Number>().DoubleValue(),
        obj.Get("password").As<Napi::String>().operator std::string(),
        obj.Get("role").As<Napi::String>().operator std::string(),
    });
    auto newObj = Napi::Object::New(env);
    newObj.Set("name", cppObj.name);
    newObj.Set("age", cppObj.age);
    newObj.Set("password", cppObj.password);
    newObj.Set("role", cppObj.role);
    return newObj;
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
    exports.Set("copy", Napi::Function::New(env, Test, "Test"));
    exports.Set("copyArray", Napi::Function::New(env, CopyArray));
    return exports;
}

void main() {
}

NODE_API_MODULE(rcsjs, Init)
