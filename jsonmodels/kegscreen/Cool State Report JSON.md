Cool State Report JSON Model:
==============================

JSON Definition:
----------------

```
{
    "api":"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "breweryname":"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "kegeratorname":"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "reporttype":"xxxxxxxxxxxxxxxx",
    "coolstate":99
}
```

Size:
-----

```
const size_t capacity = JSON_OBJECT_SIZE(5) + 260;
80+231 = 311
```

Deserializing / Parsing / Loading:
----------------------------------

```
const size_t capacity = JSON_OBJECT_SIZE(5) + 260;
DynamicJsonDocument doc(capacity);

const char* json = "{\"api\":\"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\",\"breweryname\":\"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\",\"kegeratorname\":\"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\",\"reporttype\":\"xxxxxxxxxxxxxxxx\",\"coolstate\":99}";

deserializeJson(doc, json);

const char* api = doc["api"]; // "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
const char* breweryname = doc["breweryname"]; // "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
const char* kegeratorname = doc["kegeratorname"]; // "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
const char* reporttype = doc["reporttype"]; // "xxxxxxxxxxxxxxxx"
int coolstate = doc["coolstate"]; // 99
```

Serializing / Saving:
---------------------

```
const size_t capacity = JSON_OBJECT_SIZE(5);
DynamicJsonDocument doc(capacity);

doc["api"] = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
doc["breweryname"] = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
doc["kegeratorname"] = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
doc["reporttype"] = "xxxxxxxxxxxxxxxx";
doc["coolstate"] = 99;

serializeJson(doc, Serial);
```