#include "JsWrapper.h"
#include <thread>

Napi::FunctionReference JsWrapper::constructor;

Napi::Object JsWrapper::Init(Napi::Env env, Napi::Object exports) {
    Napi::HandleScope scope(env);

    Napi::Function func = DefineClass(env, "App", {
        InstanceMethod("getValue", &JsWrapper::GetValue),
    });

    constructor = Napi::Persistent(func);
    constructor.SuppressDestruct();

    exports.Set("App", func);
    return exports;
};

JsWrapper::JsWrapper(const Napi::CallbackInfo& info): Napi::ObjectWrap<JsWrapper>(info) {
    this->value = 20;
};

Napi::Value JsWrapper::GetValue(const Napi::CallbackInfo& info) {
    auto env = info.Env();
    auto cb = info[0].As<Napi::Function>();

    return Napi::Number::New(info.Env(), this->value);
}
