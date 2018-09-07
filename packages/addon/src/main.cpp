#include <napi.h>
#include "Connector.h"

Napi::Object Init(Napi::Env env, Napi::Object exports) {
    Connector::Init(env, exports);
    return exports;
}

NODE_API_MODULE(addon, Init)
