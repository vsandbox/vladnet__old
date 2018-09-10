#include <napi.h>

class JsWrapper : public Napi::ObjectWrap<JsWrapper> {
    public:
    double value;

    public:
    static Napi::Object Init(Napi::Env env, Napi::Object exports);
    JsWrapper(const Napi::CallbackInfo& info);

    public:
    static Napi::FunctionReference constructor;
    Napi::Value GetValue(const Napi::CallbackInfo& info);
};

