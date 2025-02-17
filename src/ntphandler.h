/* Copyright (C) 2019-2021 Lee C. Bussy (@LBussy)

This file is part of Lee Bussy's Keg Cop (keg-cop).

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. */

#ifndef _NTP_H
#define _NTP_H

#include <WiFi.h>

#include "serialhandler.h"
#include "jsonconfig.h"
#include "tools.h"
#include "config.h"
#include <Ticker.h>
#include <ArduinoLog.h>
#include <sntp.h>   // sntp_get_current_timestamp()

void setClock();
String getDTS();
int getYear();   // tm_year
int getMonth();  // tm_mon
int getDate();   // tm_mday
int getWday();   // tm_wday
int getHour();   // tm_hour
int getMinute(); // tm_min
int getSecond(); // tm_sec
int getYDay();   // tm_yday
void ntpBlinker();

static const float __attribute__((unused)) GMT = 0;
static const float __attribute__((unused)) UTC = 0;
static const float __attribute__((unused)) ECT = 1.00;
static const float __attribute__((unused)) EET = 2.00;
static const float __attribute__((unused)) ART = 2.00;
static const float __attribute__((unused)) EAT = 3.00;
static const float __attribute__((unused)) MET = 3.30;
static const float __attribute__((unused)) NET = 4.00;
static const float __attribute__((unused)) PLT = 5.00;
static const float __attribute__((unused)) IST = 5.30;
static const float __attribute__((unused)) BST = 6.00;
static const float __attribute__((unused)) VST = 7.00;
static const float __attribute__((unused)) CTT = 8.00;
static const float __attribute__((unused)) JST = 9.00;
static const float __attribute__((unused)) ACT = 9.30;
static const float __attribute__((unused)) AET = 10.00;
static const float __attribute__((unused)) SST = 11.00;
static const float __attribute__((unused)) NST = 12.00;
static const float __attribute__((unused)) MIT = -11.00;
static const float __attribute__((unused)) HST = -10.00;
static const float __attribute__((unused)) AST = -9.00;
static const float __attribute__((unused)) PST = -8.00;
static const float __attribute__((unused)) PNT = -7.00;
static const float __attribute__((unused)) MST = -7.00;
static const float __attribute__((unused)) CST = -6.00;
static const float __attribute__((unused)) EST = -5.00;
static const float __attribute__((unused)) IET = -5.00;
static const float __attribute__((unused)) PRT = -4.00;
static const float __attribute__((unused)) CNT = -3.30;
static const float __attribute__((unused)) AGT = -3.00;
static const float __attribute__((unused)) BET = -3.00;
static const float __attribute__((unused)) CAT = -1.00;

static const int __attribute__((unused)) EPOCH_1_1_2019 = 1546300800; // 1546300800 =  01/01/2019 @ 12:00am (UTC)
static const char __attribute__((unused)) * DAYS_OF_WEEK[] = {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"};
static const char __attribute__((unused)) * DAYS_OF_WEEK_3[] = {"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"};

static uint32_t __attribute__((unused)) lastNTPUpdate = 0;

extern struct Config config;

#endif // _NTP_H
