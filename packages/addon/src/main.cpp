#include <napi.h>

Napi::Object Init(Napi::Env env, Napi::Object exports) {
    exports.Set("test", Napi::Number::New(env, 10.0));
    return exports;
}

NODE_API_MODULE(addon, Init)
