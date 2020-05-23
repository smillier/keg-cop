Flow Report JSON Model:
=======================

JSON Definition:
----------------

```
{
	"imperial": false,
	"taps": [
        {
			"tapid": 99,
			"pin": 99,
			"ppu": 999999,
			"name": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
			"capacity": 999.9999,
			"remaining": 999.9999,
			"active": false
		},
		{
			"tapid": 99,
			"pin": 99,
			"ppu": 999999,
			"name": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
			"capacity": 999.9999,
			"remaining": 999.9999,
			"active": false
		},
		{
			"tapid": 99,
			"pin": 99,
			"ppu": 999999,
			"name": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
			"capacity": 999.9999,
			"remaining": 999.9999,
			"active": false
		},
		{
			"tapid": 99,
			"pin": 99,
			"ppu": 999999,
			"name": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
			"capacity": 999.9999,
			"remaining": 999.9999,
			"active": false
		},
		{
			"tapid": 99,
			"pin": 99,
			"ppu": 999999,
			"name": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
			"capacity": 999.9999,
			"remaining": 999.9999,
			"active": false
		},
		{
			"tapid": 99,
			"pin": 99,
			"ppu": 999999,
			"name": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
			"capacity": 999.9999,
			"remaining": 999.9999,
			"active": false
		},
		{
			"tapid": 99,
			"pin": 99,
			"ppu": 999999,
			"name": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
			"capacity": 999.9999,
			"remaining": 999.9999,
			"active": false
		},
		{
			"tapid": 99,
			"pin": 99,
			"ppu": 999999,
			"name": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
			"capacity": 999.9999,
			"remaining": 999.9999,
			"active": false
		}
	]
}
```

Size:
-----

```
const size_t capacity = JSON_ARRAY_SIZE(8) + JSON_OBJECT_SIZE(2) + 8*JSON_OBJECT_SIZE(7) + 1000;
1056+894 = 1950
```

Deserializing / Parsing / Loading:
----------------------------------

```
const size_t capacity = JSON_ARRAY_SIZE(8) + JSON_OBJECT_SIZE(2) + 8*JSON_OBJECT_SIZE(7) + 1000;
DynamicJsonDocument doc(capacity);

const char* json = "{\"imperial\":false,\"taps\":[{\"tapid\":99,\"pin\":99,\"ppu\":999999,\"name\":\"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\",\"capacity\":999.9999,\"remaining\":999.9999,\"active\":false},{\"tapid\":99,\"pin\":99,\"ppu\":999999,\"name\":\"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\",\"capacity\":999.9999,\"remaining\":999.9999,\"active\":false},{\"tapid\":99,\"pin\":99,\"ppu\":999999,\"name\":\"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\",\"capacity\":999.9999,\"remaining\":999.9999,\"active\":false},{\"tapid\":99,\"pin\":99,\"ppu\":999999,\"name\":\"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\",\"capacity\":999.9999,\"remaining\":999.9999,\"active\":false},{\"tapid\":99,\"pin\":99,\"ppu\":999999,\"name\":\"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\",\"capacity\":999.9999,\"remaining\":999.9999,\"active\":false},{\"tapid\":99,\"pin\":99,\"ppu\":999999,\"name\":\"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\",\"capacity\":999.9999,\"remaining\":999.9999,\"active\":false},{\"tapid\":99,\"pin\":99,\"ppu\":999999,\"name\":\"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\",\"capacity\":999.9999,\"remaining\":999.9999,\"active\":false},{\"tapid\":99,\"pin\":99,\"ppu\":999999,\"name\":\"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\",\"capacity\":999.9999,\"remaining\":999.9999,\"active\":false}]}";

deserializeJson(doc, json);

bool imperial = doc["imperial"]; // false

JsonArray taps = doc["taps"];

JsonObject taps_0 = taps[0];
int taps_0_tapid = taps_0["tapid"]; // 99
int taps_0_pin = taps_0["pin"]; // 99
long taps_0_ppg = taps_0["ppu"]; // 999999
const char* taps_0_name = taps_0["name"]; // "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
float taps_0_capacity = taps_0["capacity"]; // 999.9999
float taps_0_remaining = taps_0["remaining"]; // 999.9999
bool taps_0_active = taps_0["active"]; // false

JsonObject taps_1 = taps[1];
int taps_1_tapid = taps_1["tapid"]; // 99
int taps_1_pin = taps_1["pin"]; // 99
long taps_1_ppg = taps_1["ppu"]; // 999999
const char* taps_1_name = taps_1["name"]; // "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
float taps_1_capacity = taps_1["capacity"]; // 999.9999
float taps_1_remaining = taps_1["remaining"]; // 999.9999
bool taps_1_active = taps_1["active"]; // false

JsonObject taps_2 = taps[2];
int taps_2_tapid = taps_2["tapid"]; // 99
int taps_2_pin = taps_2["pin"]; // 99
long taps_2_ppg = taps_2["ppu"]; // 999999
const char* taps_2_name = taps_2["name"]; // "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
float taps_2_capacity = taps_2["capacity"]; // 999.9999
float taps_2_remaining = taps_2["remaining"]; // 999.9999
bool taps_2_active = taps_2["active"]; // false

JsonObject taps_3 = taps[3];
int taps_3_tapid = taps_3["tapid"]; // 99
int taps_3_pin = taps_3["pin"]; // 99
long taps_3_ppg = taps_3["ppu"]; // 999999
const char* taps_3_name = taps_3["name"]; // "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
float taps_3_capacity = taps_3["capacity"]; // 999.9999
float taps_3_remaining = taps_3["remaining"]; // 999.9999
bool taps_3_active = taps_3["active"]; // false

JsonObject taps_4 = taps[4];
int taps_4_tapid = taps_4["tapid"]; // 99
int taps_4_pin = taps_4["pin"]; // 99
long taps_4_ppg = taps_4["ppu"]; // 999999
const char* taps_4_name = taps_4["name"]; // "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
float taps_4_capacity = taps_4["capacity"]; // 999.9999
float taps_4_remaining = taps_4["remaining"]; // 999.9999
bool taps_4_active = taps_4["active"]; // false

JsonObject taps_5 = taps[5];
int taps_5_tapid = taps_5["tapid"]; // 99
int taps_5_pin = taps_5["pin"]; // 99
long taps_5_ppg = taps_5["ppu"]; // 999999
const char* taps_5_name = taps_5["name"]; // "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
float taps_5_capacity = taps_5["capacity"]; // 999.9999
float taps_5_remaining = taps_5["remaining"]; // 999.9999
bool taps_5_active = taps_5["active"]; // false

JsonObject taps_6 = taps[6];
int taps_6_tapid = taps_6["tapid"]; // 99
int taps_6_pin = taps_6["pin"]; // 99
long taps_6_ppg = taps_6["ppu"]; // 999999
const char* taps_6_name = taps_6["name"]; // "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
float taps_6_capacity = taps_6["capacity"]; // 999.9999
float taps_6_remaining = taps_6["remaining"]; // 999.9999
bool taps_6_active = taps_6["active"]; // false

JsonObject taps_7 = taps[7];
int taps_7_tapid = taps_7["tapid"]; // 99
int taps_7_pin = taps_7["pin"]; // 99
long taps_7_ppg = taps_7["ppu"]; // 999999
const char* taps_7_name = taps_7["name"]; // "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
float taps_7_capacity = taps_7["capacity"]; // 999.9999
float taps_7_remaining = taps_7["remaining"]; // 999.9999
bool taps_7_active = taps_7["active"]; // false
```

Serializing / Saving:
---------------------

```
const size_t capacity = JSON_ARRAY_SIZE(8) + JSON_OBJECT_SIZE(2) + 8*JSON_OBJECT_SIZE(7);
DynamicJsonDocument doc(capacity);

doc["imperial"] = false;

JsonArray taps = doc.createNestedArray("taps");

JsonObject taps_0 = taps.createNestedObject();
taps_0["tapid"] = 99;
taps_0["pin"] = 99;
taps_0["ppu"] = 999999;
taps_0["name"] = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
taps_0["capacity"] = 999.9999;
taps_0["remaining"] = 999.9999;
taps_0["active"] = false;

JsonObject taps_1 = taps.createNestedObject();
taps_1["tapid"] = 99;
taps_1["pin"] = 99;
taps_1["ppu"] = 999999;
taps_1["name"] = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
taps_1["capacity"] = 999.9999;
taps_1["remaining"] = 999.9999;
taps_1["active"] = false;

JsonObject taps_2 = taps.createNestedObject();
taps_2["tapid"] = 99;
taps_2["pin"] = 99;
taps_2["ppu"] = 999999;
taps_2["name"] = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
taps_2["capacity"] = 999.9999;
taps_2["remaining"] = 999.9999;
taps_2["active"] = false;

JsonObject taps_3 = taps.createNestedObject();
taps_3["tapid"] = 99;
taps_3["pin"] = 99;
taps_3["ppu"] = 999999;
taps_3["name"] = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
taps_3["capacity"] = 999.9999;
taps_3["remaining"] = 999.9999;
taps_3["active"] = false;

JsonObject taps_4 = taps.createNestedObject();
taps_4["tapid"] = 99;
taps_4["pin"] = 99;
taps_4["ppu"] = 999999;
taps_4["name"] = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
taps_4["capacity"] = 999.9999;
taps_4["remaining"] = 999.9999;
taps_4["active"] = false;

JsonObject taps_5 = taps.createNestedObject();
taps_5["tapid"] = 99;
taps_5["pin"] = 99;
taps_5["ppu"] = 999999;
taps_5["name"] = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
taps_5["capacity"] = 999.9999;
taps_5["remaining"] = 999.9999;
taps_5["active"] = false;

JsonObject taps_6 = taps.createNestedObject();
taps_6["tapid"] = 99;
taps_6["pin"] = 99;
taps_6["ppu"] = 999999;
taps_6["name"] = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
taps_6["capacity"] = 999.9999;
taps_6["remaining"] = 999.9999;
taps_6["active"] = false;

JsonObject taps_7 = taps.createNestedObject();
taps_7["tapid"] = 99;
taps_7["pin"] = 99;
taps_7["ppu"] = 999999;
taps_7["name"] = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
taps_7["capacity"] = 999.9999;
taps_7["remaining"] = 999.9999;
taps_7["active"] = false;

serializeJson(doc, Serial);
```