#include <thread>
#include "Connector.h"

Connector::Connector(const Napi::CallbackInfo& info) : Napi::ObjectWrap<Connector>(info) {}
Napi::FunctionReference Connector::constructor;

Napi::Object Connector::Init(Napi::Env env, Napi::Object exports) {
    Napi::HandleScope scope(env);

    Napi::Function classConstructor = DefineClass(env, "Connector", {
        InstanceMethod("getValue", &Connector::GetValue),
        InstanceMethod("setValue", &Connector::SetValue),
    });

    constructor = Napi::Persistent(classConstructor);
    constructor.SuppressDestruct();

    exports.Set("Connector", classConstructor);
    return exports;
};

Napi::Value Connector::GetValue(const Napi::CallbackInfo& info) {
    auto env = info.Env();
    return Napi::Number::New(env, this->value);
}

Napi::Value Connector::SetValue(const Napi::CallbackInfo& info) {
    auto env = info.Env();
    double value = info[0].As<Napi::Number>().DoubleValue();
    this->value = value;
    return Napi::Number::New(env, this->value);
}

double Connector::value = 0.0;
