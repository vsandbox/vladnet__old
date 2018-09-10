{
    "targets": [{
        "target_name": "rcjs",
        "cflags!": [ "-fno-exceptions" ],
        "cflags_cc!": [ "-fno-exceptions" ],
        "sources": [
            "src/main.cpp",

            "src/Test.h",
            "src/Test.cpp"
        ],
        'include_dirs': [
            "<!@(node -p \"require('node-addon-api').include\")",
            "D:\\js\\vladnet\\packages\\rcs-native\\src"
        ],
        'libraries': [],
        'dependencies': [
            "<!(node -p \"require('node-addon-api').gyp\")",
            "D:\\js\\vladnet\\packages\\rcs-native\\binding.gyp:rcsnative"
        ],
        'defines': [ 'NAPI_DISABLE_CPP_EXCEPTIONS' ]
    }]
}