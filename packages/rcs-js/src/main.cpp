// #include <napi.h>
// #include "Connector.h"

// Napi::Object Init(Napi::Env env, Napi::Object exports) {
//     Connector::Init(env, exports);
//     return exports;
// }
#include <string>

#include <napi.h>
#include <RCS.h>

Napi::Value GetBuffer(Napi::CallbackInfo& info) {
    auto env = info.Env();
    
    char* value = new char[2];
    auto buffer = Napi::Buffer<char>::New(env, value, 2);

    //value[0] = 'a';
    //value[1] = 'g';

    //return env.Global();
    return buffer;
}

Napi::Value TestFunction(Napi::CallbackInfo& info) {
    auto env = info.Env();
    auto arr = info[0].As<Napi::Array>();
    auto length = arr.Length();

    for (size_t i = 0; i < length; i++)
    {
        auto item = arr.Get(i).As<Napi::Object>();
        auto x = item.Get("x").As<Napi::Buffer<int>>().Data();
        //item.Get("x").As<Napi::Buffer<int>>()
        x[0] = 10;
    }

    return arr;
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
    exports.Set("testFunction", Napi::Function::New(env, TestFunction, "TestFunction"));
    exports.Set("getBuffer", Napi::Function::New(env, GetBuffer, "GetBuffer"));
    return exports;
}

void main() {
}

NODE_API_MODULE(rcsjs, Init)
