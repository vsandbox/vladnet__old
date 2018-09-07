#pragma once

#include <napi.h>

class Connector : public Napi::ObjectWrap<Connector> {
public:
    static double value;

public:
    Napi::Value GetValue(const Napi::CallbackInfo& info);
    Napi::Value SetValue(const Napi::CallbackInfo& info);

public:
    static Napi::Object Init(Napi::Env env, Napi::Object exports);
    Connector(const Napi::CallbackInfo& info);
    static Napi::FunctionReference constructor;    
};
