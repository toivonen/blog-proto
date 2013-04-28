var BEMHTML = function() {
  var cache,
      xjst = (function(exports) {
    function $6(__$callback) {
        var __$i43;
        var __$i20;
        var __$i21;
        var __$i22;
        var __$i23;
        var __$i28;
        var __$r6;
        function __$fn6(__$e, __$r) {
            if (__$e) {
                return __$callback.call(this, __$e, __$r);
            } else {
                __$r6 = __$r;
            }
            __r70 = __$r6;
            this["ctx"] = __r68;
            this["_mode"] = __r69;
            "";
            __r71 = __r70;
            this["__$anflg549357759"] = __r67;
            "";
            return __$callback.call(this, null, __r71);
        }
        var __r67, __r71, __r68, __r69, __r70;
        var __this;
        __this = this;
        "";
        __r67 = this["__$anflg549357759"];
        this["__$anflg549357759"] = true;
        "";
        __r68 = this["ctx"];
        __$i20 = this;
        __$i21 = "ctx";
        __$i22 = "b-page";
        __$i23 = "js";
        __$i28 = this["ctx"]["url"];
        if (__$i28) {
            __$i43 = __$i28;
        } else {
            __$i43 = "//yandex.st/jquery/" + this["mods"]["version"] + "/jquery.min.js";
        }
        __$i20[__$i21] = {
            block: __$i22,
            elem: __$i23,
            url: __$i43
        };
        __r69 = this["_mode"];
        this["_mode"] = "";
        return apply["call"](__this, __$fn6);
    }
    function $9(__$callback) {
        if (this.elem === "core") {
            return $11.call(this, __$callback);
        } else {
            return $174.call(this, __$callback);
        }
    }
    function $11(__$callback) {
        var __$r2;
        function __$fn2(__$e, __$r) {
            if (__$e) {
                return __$callback.call(this, __$e, __$r);
            } else {
                __$r2 = __$r;
            }
            __r51 = __$r2;
            this["_mode"] = __r49;
            this["ctx"] = __r50;
            "";
            return __$callback.call(this, null, __r51);
        }
        var __r49, __r50, __r51;
        var __this;
        __this = this;
        "";
        __r49 = this["_mode"];
        this["_mode"] = "";
        __r50 = this["ctx"];
        this["ctx"] = {
            block: "b-page",
            elem: "js",
            url: "//yandex.st/jquery/1.7.2/jquery.min.js"
        };
        return apply["call"](__this, __$fn2);
    }
    function $18(__$callback) {
        var __$i88;
        var __$i84;
        var __$r17;
        function __$fn17(__$e, __$r) {
            if (__$e) {
                return __$callback.call(this, __$e, __$r);
            } else {
                __$r17 = __$r;
            }
            this["_mode"] = __r63;
            __r64["_ieCommented"] = __r65;
            this["ctx"] = __r66;
            "";
            undefined;
            return __$fn16.call(this);
        }
        var __$r16;
        function __$fn16(__$e, __$r) {
            if (__$e) {
                return __$callback.call(this, __$e, __$r);
            } else {
                __$r16 = __$r;
            }
            return __$callback.call(this, null);
        }
        var __$r15;
        function __$fn15(__$e, __$r) {
            if (__$e) {
                return __$callback.call(this, __$e, __$r);
            } else {
                __$r15 = __$r;
            }
            this["_mode"] = __r61;
            this["ctx"] = __r62;
            "";
            undefined;
            return __$fn16.call(this);
        }
        var __r66;
        var __r64, __r65;
        var __r63;
        var _$12hideRule;
        var __r62;
        var __r61;
        var _$12ie;
        var __this;
        __this = this;
        _$12ie = this["ctx"]["ie"];
        if (_$12ie === true) {
            "";
            __r61 = this["_mode"];
            this["_mode"] = "";
            __r62 = this["ctx"];
            this["ctx"] = [ 6, 7, 8, 9 ]["map"](function(v) {
                return {
                    elem: "css",
                    url: this["ctx"]["url"] + ".ie" + v + ".css",
                    ie: "IE " + v
                };
            }, this);
            return apply["call"](__this, __$fn15);
        } else {
            if (!_$12ie) {
                __$i88 = [ "gt IE 9", "<!-->", "<!--" ];
            } else {
                if (_$12ie === "!IE") {
                    __$i84 = [ _$12ie, "<!-->", "<!--" ];
                } else {
                    __$i84 = [ _$12ie, "", "" ];
                }
                __$i88 = __$i84;
            }
            _$12hideRule = __$i88;
            "";
            __r63 = this["_mode"];
            this["_mode"] = "";
            __r64 = this["ctx"];
            __r65 = __r64["_ieCommented"];
            __r64["_ieCommented"] = true;
            __r66 = this["ctx"];
            this["ctx"] = [ "<!--[if " + _$12hideRule[0] + "]>", _$12hideRule[1], this["ctx"], _$12hideRule[2], "<![endif]-->" ];
            return apply["call"](__this, __$fn17);
        }
    }
    function $23(__$callback) {
        if (!(this["__$anflg183583116"] !== true) === false) {
            if (!!this.elem === false) {
                return $26.call(this, __$callback);
            } else {
                return $174.call(this, __$callback);
            }
        } else {
            return $174.call(this, __$callback);
        }
    }
    function $26(__$callback) {
        var __$i80;
        var __$i53;
        var __$i54;
        var __$i55;
        var __$i59;
        var __$i60;
        var __$i65;
        var __$r6;
        function __$fn6(__$e, __$r) {
            var __$r7;
            function __$fn7(__$e, __$r) {
                var __$r8;
                function __$fn8(__$e, __$r) {
                    if (__$e) {
                        return __$callback.call(this, __$e, __$r);
                    } else {
                        __$r8 = __$r;
                    }
                    this["ctx"] = __r57;
                    this["_mode"] = __r58;
                    "";
                    this["__$anflg183583116"] = __r56;
                    "";
                    undefined;
                    return __$callback.call(this, null);
                }
                if (__$e) {
                    return __$callback.call(this, __$e, __$r);
                } else {
                    __$r7 = __$r;
                }
                __r55 = __$r7;
                this["_mode"] = __r54;
                "";
                _$mxUA = __r55;
                __$i53 = _$mdtype;
                __$i54 = "root";
                __$i55 = "head";
                __$i59 = {
                    tag: "meta",
                    attrs: {
                        charset: "utf-8"
                    }
                };
                __$i60 = _$mxUA;
                __$i65 = {
                    tag: "title",
                    content: _$mctx["title"]
                };
                if (_$mctx["favicon"]) {
                    __$i80 = {
                        elem: "favicon",
                        url: _$mctx["favicon"]
                    };
                } else {
                    __$i80 = "";
                }
                _$mbuf = [ __$i53, {
                    elem: __$i54,
                    content: [ {
                        elem: __$i55,
                        content: [ __$i59, __$i60, __$i65, __$i80, _$mctx["meta"], {
                            block: "i-ua"
                        }, _$mctx["head"] ]
                    }, _$mctx ]
                } ];
                "";
                __r56 = this["__$anflg183583116"];
                this["__$anflg183583116"] = true;
                "";
                __r57 = this["ctx"];
                this["ctx"] = _$mbuf;
                __r58 = this["_mode"];
                this["_mode"] = "";
                return apply["call"](__this, __$fn8);
            }
            if (__$e) {
                return __$callback.call(this, __$e, __$r);
            } else {
                __$r6 = __$r;
            }
            __r53 = __$r6;
            this["_mode"] = __r52;
            "";
            _$mdtype = __r53;
            "";
            __r54 = this["_mode"];
            this["_mode"] = "xUACompatible";
            return apply["call"](__this, __$fn7);
        }
        var __r58;
        var __r57;
        var __r56;
        var _$mctx, _$mdtype, _$mxUA, _$mbuf;
        var __r52, __r53, __r54, __r55;
        var __this;
        __this = this;
        _$mctx = this["ctx"];
        "";
        __r52 = this["_mode"];
        this["_mode"] = "doctype";
        return apply["call"](__this, __$fn6);
    }
    function $36(__$callback) {
        return __$callback.call(this, null, "footer");
    }
    function $41(__$callback) {
        return __$callback.call(this, null, "aside");
    }
    function $46(__$callback) {
        return __$callback.call(this, null, "nav");
    }
    function $51(__$callback) {
        return __$callback.call(this, null, "section");
    }
    function $56(__$callback) {
        return __$callback.call(this, null, "header");
    }
    function $61(__$callback) {
        return __$callback.call(this, null, "script");
    }
    function $64(__$callback) {
        return __$callback.call(this, null, "link");
    }
    function $66(__$callback) {
        return __$callback.call(this, null, "style");
    }
    function $68(__$callback) {
        return __$callback.call(this, null, "link");
    }
    function $70(__$callback) {
        return __$callback.call(this, null, "meta");
    }
    function $72(__$callback) {
        return __$callback.call(this, null, "head");
    }
    function $74(__$callback) {
        return __$callback.call(this, null, "html");
    }
    function $77(__$callback) {
        return __$callback.call(this, null, "body");
    }
    function $82(__$callback) {
        return __$callback.call(this, null, "script");
    }
    function $86(__$callback) {
        return __$callback.call(this, null, undefined);
    }
    function $91(__$callback) {
        return __$callback.call(this, null, {
            src: this["ctx"]["url"]
        });
    }
    function $96(__$callback) {
        return __$callback.call(this, null, {
            rel: "stylesheet",
            href: this["ctx"]["url"]
        });
    }
    function $100(__$callback) {
        return __$callback.call(this, null, {
            rel: "shortcut icon",
            href: this["ctx"]["url"]
        });
    }
    function $102(__$callback) {
        return __$callback.call(this, null, this["ctx"]["attrs"]);
    }
    function $106(__$callback) {
        return __$callback.call(this, null, undefined);
    }
    function $110(__$callback) {
        return __$callback.call(this, null, false);
    }
    function $112(__$callback) {
        return __$callback.call(this, null, false);
    }
    function $114(__$callback) {
        return __$callback.call(this, null, false);
    }
    function $116(__$callback) {
        return __$callback.call(this, null, false);
    }
    function $118(__$callback) {
        return __$callback.call(this, null, false);
    }
    function $120(__$callback) {
        return __$callback.call(this, null, false);
    }
    function $125(__$callback) {
        return __$callback.call(this, null, false);
    }
    function $129(__$callback) {
        return __$callback.call(this, null, undefined);
    }
    function $133(__$callback) {
        return __$callback.call(this, null, "i-ua_js_no i-ua_css_standard");
    }
    function $137(__$callback) {
        return __$callback.call(this, null, undefined);
    }
    function $141(__$callback) {
        return __$callback.call(this, null, [ {
            elem: "body"
        } ]);
    }
    function $145(__$callback) {
        return __$callback.call(this, null, undefined);
    }
    function $149(__$callback) {
        var __$i32;
        var __$i26;
        var __$i13;
        var __$i14;
        var __$i19;
        if (this["ctx"]["x-ua-compatible"] === false) {
            __$i32 = false;
        } else {
            __$i13 = "meta";
            __$i14 = "X-UA-Compatible";
            __$i19 = this["ctx"]["x-ua-compatible"];
            if (__$i19) {
                __$i26 = __$i19;
            } else {
                __$i26 = "IE=edge";
            }
            __$i32 = {
                tag: __$i13,
                attrs: {
                    "http-equiv": __$i14,
                    content: __$i26
                }
            };
        }
        return __$callback.call(this, null, __$i32);
    }
    function $157(__$callback) {
        var __$i13;
        var __$i6;
        __$i6 = this["ctx"]["doctype"];
        if (__$i6) {
            __$i13 = __$i6;
        } else {
            __$i13 = "<!DOCTYPE html>";
        }
        return __$callback.call(this, null, __$i13);
    }
    function $165(__$callback) {
        return __$callback.call(this, null, [ ";(function(d,e,c,r){", "e=d.documentElement;", 'c="className";', 'r="replace";', 'e[c]=e[c][r]("i-ua_js_no","i-ua_js_yes");', 'if(d.compatMode!="CSS1Compat")', 'e[c]=e[c][r]("i-ua_css_standart","i-ua_css_quirks")', "})(document);" ]["join"](""));
    }
    function $169(__$callback) {
        return __$callback.call(this, null, this["ctx"]["content"]);
    }
    function $171(__$callback) {
        return __$callback.call(this, null, undefined);
    }
    function $173(__$callback) {
        return __$callback.call(this, null, undefined);
    }
    function $174(__$callback) {
        if (!this.ctx === false) {
            if (!this.ctx.link === false) {
                if (!!this._.isSimple(this.ctx) === false) {
                    return $178.call(this, __$callback);
                } else {
                    return $183.call(this, __$callback);
                }
            } else {
                return $183.call(this, __$callback);
            }
        } else {
            return $183.call(this, __$callback);
        }
    }
    function $178(__$callback) {
        var __$i18;
        var __$i8;
        var _$7res;
        var _$7contents;
        var __r47, __r48;
        var __this;
        __this = this;
        function _$7follow() {
            var data;
            if (this["ctx"]["link"] === "no-follow") {
                return undefined;
            } else {
                undefined;
                data = this["_links"][this["ctx"]["link"]];
                "";
                __r47 = this["ctx"];
                this["ctx"] = data;
                __r48 = apply["call"](__this);
                this["ctx"] = __r47;
                "";
                return __r48;
            }
        }
        __$i8 = !cache;
        if (__$i8) {
            __$i18 = __$i8;
        } else {
            __$i18 = !this["_cacheLog"];
        }
        if (__$i18) {
            return __$callback.call(this, null, _$7follow["call"](this));
        } else {
            undefined;
            _$7contents = this["_buf"]["slice"](this["_cachePos"])["join"]("");
            this["_cachePos"] = this["_buf"]["length"];
            this["_cacheLog"]["push"](_$7contents, {
                log: this["_localLog"]["slice"](),
                link: this["ctx"]["link"]
            });
            _$7res = _$7follow["call"](this);
            this["_cachePos"] = this["_buf"]["length"];
            return __$callback.call(this, null, _$7res);
        }
    }
    function $183(__$callback) {
        if (!cache === false) {
            if (!this.ctx === false) {
                if (!this.ctx.cache === false) {
                    return $187.call(this, __$callback);
                } else {
                    return $192.call(this, __$callback);
                }
            } else {
                return $192.call(this, __$callback);
            }
        } else {
            return $192.call(this, __$callback);
        }
    }
    function $187(__$callback) {
        var __$r60;
        function __$fn60(__$e, __$r) {
            if (__$e) {
                return __$callback.call(this, __$e, __$r);
            } else {
                __$r60 = __$r;
            }
            _$6res = __$r60;
            _$6tail = this["_buf"]["slice"](this["_cachePos"])["join"]("");
            if (_$6tail) {
                _$6cacheLog["push"](_$6tail);
            } else {
                undefined;
            }
            __r42["cache"] = __r43;
            this["_cachePos"] = __r44;
            this["_cacheLog"] = __r45;
            this["_localLog"] = __r46;
            "";
            cache["set"](this["ctx"]["cache"], {
                log: _$6cacheLog,
                res: _$6res
            });
            return __$callback.call(this, null, _$6res);
        }
        var __$r59;
        function __$fn59(__$e, __$r) {
            if (__$e) {
                return __$callback.call(this, __$e, __$r);
            } else {
                __$r59 = __$r;
            }
            while (true) {
                if (!(_$6i < _$6cached["log"]["length"])) {
                    break;
                } else {
                    if (typeof _$6cached["log"][_$6i] === "string") {
                        this["_buf"]["push"](_$6cached["log"][_$6i]);
                        _$6i++;
                        return __$fn58.call(this);
                    } else {
                        undefined;
                        _$6log = _$6cached["log"][_$6i];
                        _$6reverseLog = _$6log["log"]["map"](function(entry) {
                            return {
                                key: entry[0],
                                value: _$6setProperty(this, entry[0], entry[1])
                            };
                        }, this)["reverse"]();
                        "";
                        __r37 = this["ctx"];
                        __r38 = __r37["cache"];
                        __r37["cache"] = null;
                        __r39 = this["_cacheLog"];
                        this["_cacheLog"] = null;
                        __r40 = this["ctx"];
                        __r41 = __r40["link"];
                        __r40["link"] = _$6log["link"];
                        return apply["call"](__this, __$fn57);
                    }
                }
            }
            this["_links"] = _$6oldLinks;
            return __$callback.call(this, null, _$6cached["res"]);
        }
        var __$r58;
        function __$fn58(__$e, __$r) {
            if (__$e) {
                return __$callback.call(this, __$e, __$r);
            } else {
                __$r58 = __$r;
            }
            return __$fn59.call(this);
        }
        var __$r57;
        function __$fn57(__$e, __$r) {
            if (__$e) {
                return __$callback.call(this, __$e, __$r);
            } else {
                __$r57 = __$r;
            }
            __r37["cache"] = __r38;
            this["_cacheLog"] = __r39;
            __r40["link"] = __r41;
            "";
            undefined;
            _$6reverseLog["forEach"](function(entry) {
                _$6setProperty(this, entry["key"], entry["value"]);
            }, this);
            _$6i++;
            return __$fn58.call(this);
        }
        var _$6tail;
        var __r46;
        var __r45;
        var __r44;
        var __r42, __r43;
        var _$6cacheLog, _$6res;
        var __r40, __r41;
        var __r39;
        var __r37, __r38;
        var _$6log, _$6reverseLog;
        var _$6i;
        var _$6oldLinks;
        var _$6cached;
        var __this;
        __this = this;
        function _$6setProperty(obj, key, value) {
            var i;
            var host, previous;
            var i;
            var target;
            if (key["length"] === 0) {
                return undefined;
            } else {
                undefined;
                if (Array["isArray"](value)) {
                    target = obj;
                    i = 0;
                    while (true) {
                        if (!(i < value["length"] - 1)) {
                            break;
                        } else {
                            target = target[value[i]];
                            i++;
                        }
                    }
                    value = target[value[i]];
                } else {
                    undefined;
                }
                host = obj;
                i = 0;
                previous = host[key[i]];
                host[key[i]] = value;
                return previous;
            }
            while (true) {
                if (!(i < key["length"] - 1)) {
                    break;
                } else {
                    host = host[key[i]];
                    i++;
                }
            }
        }
        if (_$6cached = cache["get"](this["ctx"]["cache"])) {
            _$6oldLinks = this["_links"];
            if (this["ctx"]["links"]) {
                this["_links"] = this["ctx"]["links"];
            } else {
                undefined;
            }
            _$6i = 0;
            return __$fn59.call(this);
        } else {
            undefined;
            _$6cacheLog = [];
            "";
            __r42 = this["ctx"];
            __r43 = __r42["cache"];
            __r42["cache"] = null;
            __r44 = this["_cachePos"];
            this["_cachePos"] = this["_buf"]["length"];
            __r45 = this["_cacheLog"];
            this["_cacheLog"] = _$6cacheLog;
            __r46 = this["_localLog"];
            this["_localLog"] = [];
            return apply["call"](__this, __$fn60);
        }
    }
    function $192(__$callback) {
        var __t = this._mode;
        if (__t === "default") {
            return $194.call(this, __$callback);
        } else if (__t === "") {
            if (!this._.isSimple(this.ctx) === false) {
                return $197.call(this, __$callback);
            } else {
                if (!!this.ctx === false) {
                    return $200.call(this, __$callback);
                } else {
                    if (!this._.isArray(this.ctx) === false) {
                        return $203.call(this, __$callback);
                    } else {
                        if (!true === false) {
                            return $206.call(this, __$callback);
                        } else {
                            return $e.call(this, __$callback);
                        }
                    }
                }
            }
        } else if (__t === "tag") {
            if (this.block === "custom-fonts") {
                if (!!this.elem === false) {
                    return $212.call(this, __$callback);
                } else {
                    return $e.call(this, __$callback);
                }
            } else {
                return $e.call(this, __$callback);
            }
        } else {
            return $e.call(this, __$callback);
        }
    }
    function $194(__$callback) {
        var __$i945;
        var __$i946;
        var __$i889;
        var __$i879;
        var __$i880;
        var __$i881;
        var __$i882;
        var __$i654;
        var __$i641;
        var __$i635;
        var __$i630;
        var __$i620;
        var __$i616;
        var __$i613;
        var __$i598;
        var __$i588;
        var __$i580;
        var __$i572;
        var __$i563;
        var __$i559;
        var __$i555;
        var __$i538;
        var __$i526;
        var __$i529;
        var __$i524;
        var __$i515;
        var __$i511;
        var __$i501;
        var __$i498;
        var __$i488;
        var __$i479;
        var __$i474;
        var __$i464;
        var __$i455;
        var __$i450;
        var __$i441;
        var __$i762;
        var __$i744;
        var __$i734;
        var __$i845;
        var __$i835;
        var __$i833;
        var __$i825;
        var __$i815;
        var __$i816;
        var __$i813;
        var __$i386;
        var __$i379;
        var __$i362;
        var __$i1184;
        var __$i1172;
        var __$i334;
        var __$i315;
        var __$i316;
        var __$i319;
        var __$i322;
        var __$i325;
        var __$i304;
        var __$i297;
        var __$i294;
        var __$i287;
        var __$i282;
        var __$i272;
        var __$i1121;
        var __$i1109;
        var __$i1110;
        var __$i1101;
        var __$i1089;
        var __$i1090;
        var __$i1071;
        var __$i1062;
        var __$i1056;
        var __$i1047;
        var __$i248;
        var __$i243;
        var __$i239;
        var __$i230;
        var __$i212;
        var __$i1023;
        var __$i1013;
        var __$i176;
        var __$i155;
        var __$i152;
        var __$i148;
        var __$i129;
        var __$i114;
        var __$i115;
        var __$i118;
        var __$i86;
        var __$i75;
        var __$i68;
        var __$i60;
        var __$i55;
        var __$i45;
        var __$r272;
        function __$fn272(__$e, __$r) {
            var __$r275;
            function __$fn275(__$e, __$r) {
                var __$r289;
                function __$fn289(__$e, __$r) {
                    if (__$e) {
                        return __$callback.call(this, __$e, __$r);
                    } else {
                        __$r289 = __$r;
                    }
                    return __$callback.call(this, null);
                }
                var __$r288;
                function __$fn288(__$e, __$r) {
                    var __$r291;
                    function __$fn291(__$e, __$r) {
                        if (__$e) {
                            return __$callback.call(this, __$e, __$r);
                        } else {
                            __$r291 = __$r;
                        }
                        __$i1172 = _$5tag;
                        if (__$i1172) {
                            __$i1184 = _$5buf["push"]("</", _$5tag, ">");
                        } else {
                            __$i1184 = __$i1172;
                        }
                        return __$fn289.call(this);
                    }
                    var __$r290;
                    function __$fn290(__$e, __$r) {
                        if (__$e) {
                            return __$callback.call(this, __$e, __$r);
                        } else {
                            __$r290 = __$r;
                        }
                        this["_notNewList"] = __r32;
                        this["position"] = __r33;
                        this["_listLength"] = __r34;
                        this["ctx"] = __r35;
                        this["_mode"] = __r36;
                        "";
                        undefined;
                        return __$fn291.call(this);
                    }
                    if (__$e) {
                        return __$callback.call(this, __$e, __$r);
                    } else {
                        __$r288 = __$r;
                    }
                    __r31 = __$r288;
                    this["_mode"] = __r30;
                    "";
                    _$5content = __r31;
                    __$i1047 = _$5content;
                    if (__$i1047) {
                        __$i1056 = __$i1047;
                    } else {
                        __$i1056 = _$5content === 0;
                    }
                    if (__$i1056) {
                        __$i1062 = this["block"];
                        if (__$i1062) {
                            __$i1071 = __$i1062;
                        } else {
                            __$i1071 = this["elem"];
                        }
                        _$5isBEM = __$i1071;
                        "";
                        __r32 = this["_notNewList"];
                        this["_notNewList"] = false;
                        __r33 = this["position"];
                        __$i1089 = this;
                        __$i1090 = "position";
                        if (_$5isBEM) {
                            __$i1101 = 1;
                        } else {
                            __$i1101 = this["position"];
                        }
                        __$i1089[__$i1090] = __$i1101;
                        __r34 = this["_listLength"];
                        __$i1109 = this;
                        __$i1110 = "_listLength";
                        if (_$5isBEM) {
                            __$i1121 = 1;
                        } else {
                            __$i1121 = this["_listLength"];
                        }
                        __$i1109[__$i1110] = __$i1121;
                        __r35 = this["ctx"];
                        this["ctx"] = _$5content;
                        __r36 = this["_mode"];
                        this["_mode"] = "";
                        return apply["call"](__this, __$fn290);
                    } else {
                        undefined;
                        return __$fn291.call(this);
                    }
                }
                if (__$e) {
                    return __$callback.call(this, __$e, __$r);
                } else {
                    __$r275 = __$r;
                }
                if (this["_"]["isShortTag"](_$5tag)) {
                    _$5buf["push"]("/>");
                    return __$fn289.call(this);
                } else {
                    __$i1013 = _$5tag;
                    if (__$i1013) {
                        __$i1023 = _$5buf["push"](">");
                    } else {
                        __$i1023 = __$i1013;
                    }
                    "";
                    __r30 = this["_mode"];
                    this["_mode"] = "content";
                    return apply["call"](__this, __$fn288);
                }
            }
            var __$r274;
            function __$fn274(__$e, __$r) {
                var __$r276;
                function __$fn276(__$e, __$r) {
                    var __$r277;
                    function __$fn277(__$e, __$r) {
                        var __$r280;
                        function __$fn280(__$e, __$r) {
                            var __$r286;
                            function __$fn286(__$e, __$r) {
                                var __$r287;
                                function __$fn287(__$e, __$r) {
                                    if (__$e) {
                                        return __$callback.call(this, __$e, __$r);
                                    } else {
                                        __$r287 = __$r;
                                    }
                                    __r29 = __$r287;
                                    this["_mode"] = __r28;
                                    "";
                                    _$5attrs = __r29;
                                    _$5attrs = this["_"]["extend"](_$5attrs, _$5v["attrs"]);
                                    if (_$5attrs) {
                                        _$5name = undefined;
                                        _$5name;
                                        __$i945 = _$5attrs;
                                        __$i946 = typeof __$i945 === "object" && __$i945 !== null ? Object.keys(__$i945) : [];
                                        __$fi946 = 0;
                                        while (__$fi946 < __$i946["length"]) {
                                            _$5name = __$i946[__$fi946];
                                            if (_$5attrs[_$5name] === undefined) {
                                                __$fi946++;
                                                continue;
                                            } else {
                                                undefined;
                                                _$5buf["push"](" ", _$5name, '="', this["_"]["attrEscape"](_$5attrs[_$5name]), '"');
                                                __$fi946++;
                                            }
                                        }
                                    } else {
                                        undefined;
                                    }
                                    return __$fn275.call(this);
                                }
                                if (__$e) {
                                    return __$callback.call(this, __$e, __$r);
                                } else {
                                    __$r286 = __$r;
                                }
                                "";
                                __r28 = this["_mode"];
                                this["_mode"] = "attrs";
                                return apply["call"](__this, __$fn287);
                            }
                            var __$r285;
                            function __$fn285(__$e, __$r) {
                                if (__$e) {
                                    return __$callback.call(this, __$e, __$r);
                                } else {
                                    __$r285 = __$r;
                                }
                                __r27 = __$r285;
                                this["_mode"] = __r26;
                                "";
                                _$5jsAttr = __r27;
                                __$i879 = _$5buf;
                                __$i880 = "push";
                                __$i881 = " ";
                                __$i882 = _$5jsAttr;
                                if (__$i882) {
                                    __$i889 = __$i882;
                                } else {
                                    __$i889 = "onclick";
                                }
                                __$i879[__$i880](__$i881, __$i889, '="return ', this["_"]["attrEscape"](JSON["stringify"](_$5jsParams)), '"');
                                return __$fn286.call(this);
                            }
                            if (__$e) {
                                return __$callback.call(this, __$e, __$r);
                            } else {
                                __$r280 = __$r;
                            }
                            if (_$5jsParams) {
                                "";
                                __r26 = this["_mode"];
                                this["_mode"] = "jsAttr";
                                return apply["call"](__this, __$fn285);
                            } else {
                                undefined;
                                return __$fn286.call(this);
                            }
                        }
                        var __$r279;
                        function __$fn279(__$e, __$r) {
                            if (__$e) {
                                return __$callback.call(this, __$e, __$r);
                            } else {
                                __$r279 = __$r;
                            }
                            __$i813 = _$5cls;
                            if (__$i813) {
                                __$i815 = _$5buf;
                                __$i816 = "push";
                                if (_$5isBEM) {
                                    __$i825 = " ";
                                } else {
                                    __$i825 = "";
                                }
                                __$i833 = __$i815[__$i816](__$i825, _$5cls);
                            } else {
                                __$i833 = __$i813;
                            }
                            __$i835 = _$5addJSInitClass;
                            if (__$i835) {
                                __$i845 = _$5buf["push"](" i-bem");
                            } else {
                                __$i845 = __$i835;
                            }
                            _$5buf["push"]('"');
                            return __$fn280.call(this);
                        }
                        var __$r278;
                        function __$fn278(__$e, __$r) {
                            var __$r284;
                            function __$fn284(__$e, __$r) {
                                if (__$e) {
                                    return __$callback.call(this, __$e, __$r);
                                } else {
                                    __$r284 = __$r;
                                }
                                return __$fn279.call(this);
                            }
                            var __$r283;
                            function __$fn283(__$e, __$r) {
                                if (__$e) {
                                    return __$callback.call(this, __$e, __$r);
                                } else {
                                    __$r283 = __$r;
                                }
                                while (true) {
                                    if (!(_$5i < _$5mix["length"])) {
                                        break;
                                    } else {
                                        _$5mixItem = _$5mix[_$5i];
                                        __$i441 = _$5mixItem["block"];
                                        if (__$i441) {
                                            __$i450 = __$i441;
                                        } else {
                                            __$i450 = _$5mixItem["elem"];
                                        }
                                        _$5hasItem = __$i450;
                                        __$i455 = _$5mixItem["block"];
                                        if (__$i455) {
                                            __$i464 = __$i455;
                                        } else {
                                            __$i464 = _$5mixItem["_block"];
                                        }
                                        if (__$i464) {
                                            __$i474 = __$i464;
                                        } else {
                                            __$i474 = _$5_this["block"];
                                        }
                                        _$5block = __$i474;
                                        __$i479 = _$5mixItem["elem"];
                                        if (__$i479) {
                                            __$i488 = __$i479;
                                        } else {
                                            __$i488 = _$5mixItem["_elem"];
                                        }
                                        if (__$i488) {
                                            __$i498 = __$i488;
                                        } else {
                                            __$i498 = _$5_this["elem"];
                                        }
                                        _$5elem = __$i498;
                                        __$i501 = _$5hasItem;
                                        if (__$i501) {
                                            __$i511 = _$5buf["push"](" ");
                                        } else {
                                            __$i511 = __$i501;
                                        }
                                        __$i515 = _$5BEM_["INTERNAL"];
                                        if (_$5hasItem) {
                                            __$i524 = "buildClasses";
                                        } else {
                                            __$i524 = "buildModsClasses";
                                        }
                                        __$i526 = _$5block;
                                        __$i529 = _$5mixItem["elem"];
                                        if (__$i529) {
                                            __$i538 = __$i529;
                                        } else {
                                            __$i538 = _$5mixItem["_elem"];
                                        }
                                        if (__$i538) {
                                            __$i559 = __$i538;
                                        } else {
                                            if (_$5mixItem["block"]) {
                                                __$i555 = undefined;
                                            } else {
                                                __$i555 = _$5_this["elem"];
                                            }
                                            __$i559 = __$i555;
                                        }
                                        __$i563 = _$5mixItem["elemMods"];
                                        if (__$i563) {
                                            __$i572 = __$i563;
                                        } else {
                                            __$i572 = _$5mixItem["mods"];
                                        }
                                        __$i515[__$i524](__$i526, __$i559, __$i572, _$5buf);
                                        if (_$5mixItem["js"]) {
                                            __$i580 = _$5jsParams;
                                            if (__$i580) {
                                                __$i588 = __$i580;
                                            } else {
                                                __$i588 = _$5jsParams = {};
                                            }
                                            __$i598 = _$5BEM_["INTERNAL"]["buildClass"](_$5block, _$5mixItem["elem"]);
                                            if (_$5mixItem["js"] === true) {
                                                __$i613 = {};
                                            } else {
                                                __$i613 = _$5mixItem["js"];
                                            }
                                            __$i588[__$i598] = __$i613;
                                            __$i616 = _$5addJSInitClass;
                                            if (__$i616) {
                                                __$i635 = __$i616;
                                            } else {
                                                __$i620 = _$5block;
                                                if (__$i620) {
                                                    __$i630 = !_$5mixItem["elem"];
                                                } else {
                                                    __$i630 = __$i620;
                                                }
                                                __$i635 = _$5addJSInitClass = __$i630;
                                            }
                                        } else {
                                            undefined;
                                        }
                                        __$i641 = _$5hasItem;
                                        if (__$i641) {
                                            __$i654 = !_$5visited[_$5visitedKey(_$5block, _$5elem)];
                                        } else {
                                            __$i654 = __$i641;
                                        }
                                        if (__$i654) {
                                            _$5visited[_$5visitedKey(_$5block, _$5elem)] = true;
                                            "";
                                            __r20 = this["block"];
                                            this["block"] = _$5block;
                                            __r21 = this["elem"];
                                            this["elem"] = _$5elem;
                                            __r22 = this["_mode"];
                                            this["_mode"] = "mix";
                                            return apply["call"](__this, __$fn281);
                                        } else {
                                            undefined;
                                            return __$fn282.call(this);
                                        }
                                    }
                                }
                                return __$fn284.call(this);
                            }
                            var __$r282;
                            function __$fn282(__$e, __$r) {
                                if (__$e) {
                                    return __$callback.call(this, __$e, __$r);
                                } else {
                                    __$r282 = __$r;
                                }
                                _$5i++;
                                return __$fn283.call(this);
                            }
                            var __$r281;
                            function __$fn281(__$e, __$r) {
                                if (__$e) {
                                    return __$callback.call(this, __$e, __$r);
                                } else {
                                    __$r281 = __$r;
                                }
                                __r23 = __$r281;
                                this["block"] = __r20;
                                this["elem"] = __r21;
                                this["_mode"] = __r22;
                                "";
                                _$5nestedMix = __r23;
                                if (_$5nestedMix) {
                                    _$5j = 0;
                                    while (true) {
                                        if (!(_$5j < _$5nestedMix["length"])) {
                                            break;
                                        } else {
                                            _$5nestedItem = _$5nestedMix[_$5j];
                                            __$i734 = !_$5nestedItem["block"];
                                            if (__$i734) {
                                                __$i744 = !_$5nestedItem["elem"];
                                            } else {
                                                __$i744 = __$i734;
                                            }
                                            if (__$i744) {
                                                __$i762 = __$i744;
                                            } else {
                                                __$i762 = !_$5visited[_$5visitedKey(_$5nestedItem["block"], _$5nestedItem["elem"])];
                                            }
                                            if (__$i762) {
                                                _$5nestedItem["_block"] = _$5block;
                                                _$5nestedItem["_elem"] = _$5elem;
                                                _$5mix["splice"](_$5i + 1, 0, _$5nestedItem);
                                            } else {
                                                undefined;
                                            }
                                            _$5j++;
                                        }
                                    }
                                } else {
                                    undefined;
                                }
                                return __$fn282.call(this);
                            }
                            if (__$e) {
                                return __$callback.call(this, __$e, __$r);
                            } else {
                                __$r278 = __$r;
                            }
                            __r19 = __$r278;
                            this["_mode"] = __r18;
                            "";
                            _$5mix = __r19;
                            __$i362 = _$5v["mix"];
                            if (__$i362) {
                                if (_$5mix) {
                                    __$i379 = _$5mix["concat"](_$5v["mix"]);
                                } else {
                                    __$i379 = _$5v["mix"];
                                }
                                __$i386 = _$5mix = __$i379;
                            } else {
                                __$i386 = __$i362;
                            }
                            if (_$5mix) {
                                _$5visited = {};
                                function _$5visitedKey(block, elem) {
                                    var __$i1207;
                                    var __$i1199;
                                    var __$i1200;
                                    var __$i1196;
                                    var __$i1189;
                                    __$i1189 = block;
                                    if (__$i1189) {
                                        __$i1196 = __$i1189;
                                    } else {
                                        __$i1196 = "";
                                    }
                                    __$i1199 = __$i1196 + "__";
                                    __$i1200 = elem;
                                    if (__$i1200) {
                                        __$i1207 = __$i1200;
                                    } else {
                                        __$i1207 = "";
                                    }
                                    return __$i1199 + __$i1207;
                                }
                                _$5visited[_$5visitedKey(this["block"], this["elem"])] = true;
                                if (!this["_"]["isArray"](_$5mix)) {
                                    _$5mix = [ _$5mix ];
                                } else {
                                    undefined;
                                }
                                _$5i = 0;
                                return __$fn283.call(this);
                            } else {
                                undefined;
                                return __$fn284.call(this);
                            }
                        }
                        if (__$e) {
                            return __$callback.call(this, __$e, __$r);
                        } else {
                            __$r277 = __$r;
                        }
                        __r17 = __$r277;
                        this["_mode"] = __r16;
                        "";
                        _$5cls = __r17;
                        __$i272 = _$5cls;
                        if (__$i272) {
                            __$i282 = __$i272;
                        } else {
                            __$i282 = _$5cls = _$5v["cls"];
                        }
                        __$i287 = _$5v["block"];
                        if (__$i287) {
                            __$i294 = _$5jsParams;
                        } else {
                            __$i294 = __$i287;
                        }
                        _$5addJSInitClass = __$i294;
                        __$i297 = _$5isBEM;
                        if (__$i297) {
                            __$i304 = __$i297;
                        } else {
                            __$i304 = _$5cls;
                        }
                        if (__$i304) {
                            _$5buf["push"](' class="');
                            if (_$5isBEM) {
                                __$i315 = _$5BEM_["INTERNAL"];
                                __$i316 = "buildClasses";
                                __$i319 = this["block"];
                                __$i322 = _$5v["elem"];
                                __$i325 = _$5v["elemMods"];
                                if (__$i325) {
                                    __$i334 = __$i325;
                                } else {
                                    __$i334 = _$5v["mods"];
                                }
                                __$i315[__$i316](__$i319, __$i322, __$i334, _$5buf);
                                "";
                                __r18 = this["_mode"];
                                this["_mode"] = "mix";
                                return apply["call"](__this, __$fn278);
                            } else {
                                undefined;
                                return __$fn279.call(this);
                            }
                        } else {
                            undefined;
                            return __$fn280.call(this);
                        }
                    }
                    if (__$e) {
                        return __$callback.call(this, __$e, __$r);
                    } else {
                        __$r276 = __$r;
                    }
                    __r15 = __$r276;
                    this["_mode"] = __r14;
                    "";
                    _$5isBEM = __r15;
                    __$i212 = typeof _$5isBEM != "undefined";
                    if (__$i212) {
                        __$i248 = __$i212;
                    } else {
                        if (typeof _$5v["bem"] != "undefined") {
                            __$i243 = _$5v["bem"];
                        } else {
                            __$i230 = _$5v["block"];
                            if (__$i230) {
                                __$i239 = __$i230;
                            } else {
                                __$i239 = _$5v["elem"];
                            }
                            __$i243 = __$i239;
                        }
                        __$i248 = _$5isBEM = __$i243;
                    }
                    "";
                    __r16 = this["_mode"];
                    this["_mode"] = "cls";
                    return apply["call"](__this, __$fn277);
                }
                if (__$e) {
                    return __$callback.call(this, __$e, __$r);
                } else {
                    __$r274 = __$r;
                }
                _$5buf["push"]("<", _$5tag);
                "";
                __r14 = this["_mode"];
                this["_mode"] = "bem";
                return apply["call"](__this, __$fn276);
            }
            var __$r273;
            function __$fn273(__$e, __$r) {
                if (__$e) {
                    return __$callback.call(this, __$e, __$r);
                } else {
                    __$r273 = __$r;
                }
                __r13 = __$r273;
                this["_mode"] = __r12;
                "";
                _$5js = __r13;
                if (_$5js) {
                    __$i114 = this["_"];
                    __$i115 = "extend";
                    __$i118 = _$5v["js"];
                    if (_$5js === true) {
                        __$i129 = {};
                    } else {
                        __$i129 = _$5js;
                    }
                    __$i152 = __$i114[__$i115](__$i118, __$i129);
                } else {
                    if (_$5v["js"] === true) {
                        __$i148 = {};
                    } else {
                        __$i148 = _$5v["js"];
                    }
                    __$i152 = __$i148;
                }
                _$5js = __$i152;
                __$i155 = _$5js;
                if (__$i155) {
                    __$i176 = (_$5jsParams = {})[_$5BEM_["INTERNAL"]["buildClass"](this["block"], _$5v["elem"])] = _$5js;
                } else {
                    __$i176 = __$i155;
                }
                return __$fn274.call(this);
            }
            if (__$e) {
                return __$callback.call(this, __$e, __$r);
            } else {
                __$r272 = __$r;
            }
            __r9 = __$r272;
            this["_mode"] = __r8;
            "";
            _$5tag = __r9;
            __$i45 = typeof _$5tag != "undefined";
            if (__$i45) {
                __$i55 = __$i45;
            } else {
                __$i55 = _$5tag = _$5v["tag"];
            }
            __$i60 = typeof _$5tag != "undefined";
            if (__$i60) {
                __$i68 = __$i60;
            } else {
                __$i68 = _$5tag = "div";
            }
            if (_$5tag) {
                __$i75 = this["block"];
                if (__$i75) {
                    __$i86 = _$5v["js"] !== false;
                } else {
                    __$i86 = __$i75;
                }
                if (__$i86) {
                    "";
                    __r12 = this["_mode"];
                    this["_mode"] = "js";
                    return apply["call"](__this, __$fn273);
                } else {
                    undefined;
                    return __$fn274.call(this);
                }
            } else {
                undefined;
                return __$fn275.call(this);
            }
        }
        var __r36;
        var __r35;
        var __r34;
        var __r33;
        var __r32;
        var _$5isBEM;
        var _$5content;
        var __$fi946;
        var _$5name;
        var _$5attrs;
        var _$5jsAttr;
        var _$5nestedItem;
        var _$5j;
        var _$5nestedMix;
        var _$5mixItem, _$5hasItem, _$5block, _$5elem;
        var _$5i;
        var _$5visited;
        var _$5mix;
        var _$5addJSInitClass;
        var _$5cls;
        var _$5isBEM;
        var _$5jsParams, _$5js;
        var _$5_this, _$5BEM_, _$5v, _$5buf, _$5tag;
        var __r20, __r8, __r12, __r13, __r14, __r15, __r16, __r17, __r18, __r19, __r9, __r21, __r22, __r23, __r26, __r27, __r28, __r29, __r30, __r31;
        var __this;
        __this = this;
        _$5_this = this;
        _$5BEM_ = _$5_this["BEM"];
        _$5v = this["ctx"];
        _$5buf = this["_buf"];
        "";
        __r8 = this["_mode"];
        this["_mode"] = "tag";
        return apply["call"](__this, __$fn272);
    }
    function $197(__$callback) {
        var __$i43;
        var __$i30;
        var __$i20;
        var __$i11;
        var _$4ctx;
        this["_listLength"]--;
        _$4ctx = this["ctx"];
        __$i11 = _$4ctx;
        if (__$i11) {
            __$i20 = _$4ctx !== true;
        } else {
            __$i20 = __$i11;
        }
        if (__$i20) {
            __$i30 = __$i20;
        } else {
            __$i30 = _$4ctx === 0;
        }
        if (__$i30) {
            __$i43 = this["_buf"]["push"](_$4ctx);
        } else {
            __$i43 = __$i30;
        }
        return __$callback.call(this, null);
    }
    function $200(__$callback) {
        this["_listLength"]--;
        return __$callback.call(this, null);
    }
    function $203(__$callback) {
        var __$i107;
        var __$i97;
        var __$i80;
        var __$i68;
        var __$i69;
        var __$r24;
        function __$fn24(__$e, __$r) {
            if (__$e) {
                return __$callback.call(this, __$e, __$r);
            } else {
                __$r24 = __$r;
            }
            while (true) {
                if (!(_$2i < _$2l)) {
                    break;
                } else {
                    _$2newCtx = _$2v[_$2i++];
                    "";
                    __r7 = this["ctx"];
                    __$i68 = this;
                    __$i69 = "ctx";
                    if (_$2newCtx === null) {
                        __$i80 = "";
                    } else {
                        __$i80 = _$2newCtx;
                    }
                    __$i68[__$i69] = __$i80;
                    return apply["call"](__this, __$fn23);
                }
            }
            __$i97 = _$2prevNotNewList;
            if (__$i97) {
                __$i107 = __$i97;
            } else {
                __$i107 = this["position"] = _$2prevPos;
            }
            return __$callback.call(this, null);
        }
        var __$r23;
        function __$fn23(__$e, __$r) {
            if (__$e) {
                return __$callback.call(this, __$e, __$r);
            } else {
                __$r23 = __$r;
            }
            this["ctx"] = __r7;
            "";
            undefined;
            return __$fn24.call(this);
        }
        var __r7;
        var _$2newCtx;
        var _$2v, _$2l, _$2i, _$2prevPos, _$2prevNotNewList;
        var __this;
        __this = this;
        _$2v = this["ctx"];
        _$2l = _$2v["length"];
        _$2i = 0;
        _$2prevPos = this["position"];
        _$2prevNotNewList = this["_notNewList"];
        if (_$2prevNotNewList) {
            this["_listLength"] += _$2l - 1;
        } else {
            this["position"] = 0;
            this["_listLength"] = _$2l;
        }
        this["_notNewList"] = true;
        return __$fn24.call(this);
    }
    function $206(__$callback) {
        var __$i235;
        var __$i222;
        var __$i211;
        var __$i212;
        var __$i215;
        var __$i208;
        var __$i199;
        var __$i194;
        var __$i181;
        var __$i182;
        var __$i187;
        var __$i173;
        var __$i165;
        var __$i149;
        var __$i150;
        var __$i128;
        var __$i119;
        var __$i110;
        var __$i111;
        var __$i112;
        var __$i102;
        var __$i98;
        var __$i84;
        var __$i85;
        var __$i86;
        var __$i76;
        var __$i61;
        var __$i62;
        var __$i67;
        var __$i44;
        var __$i34;
        var __$i29;
        var __$i20;
        var __$r54;
        function __$fn54(__$e, __$r) {
            if (__$e) {
                return __$callback.call(this, __$e, __$r);
            } else {
                __$r54 = __$r;
            }
            undefined;
            this["_mode"] = __r0;
            this["_links"] = __r1;
            this["block"] = __r2;
            this["_currBlock"] = __r3;
            this["elem"] = __r4;
            this["mods"] = __r5;
            this["elemMods"] = __r6;
            "";
            return __$callback.call(this, null);
        }
        var __r6;
        var __r5;
        var __r4;
        var __r3;
        var __r2;
        var __r1;
        var __r0;
        var _$1vBlock, _$1vElem, _$1block;
        var __this;
        __this = this;
        _$1vBlock = this["ctx"]["block"];
        _$1vElem = this["ctx"]["elem"];
        __$i20 = this["_currBlock"];
        if (__$i20) {
            __$i29 = __$i20;
        } else {
            __$i29 = this["block"];
        }
        _$1block = __$i29;
        __$i34 = this["ctx"];
        if (__$i34) {
            __$i44 = __$i34;
        } else {
            __$i44 = this["ctx"] = {};
        }
        "";
        __r0 = this["_mode"];
        this["_mode"] = "default";
        __r1 = this["_links"];
        __$i61 = this;
        __$i62 = "_links";
        __$i67 = this["ctx"]["links"];
        if (__$i67) {
            __$i76 = __$i67;
        } else {
            __$i76 = this["_links"];
        }
        __$i61[__$i62] = __$i76;
        __r2 = this["block"];
        __$i84 = this;
        __$i85 = "block";
        __$i86 = _$1vBlock;
        if (__$i86) {
            __$i102 = __$i86;
        } else {
            if (_$1vElem) {
                __$i98 = _$1block;
            } else {
                __$i98 = undefined;
            }
            __$i102 = __$i98;
        }
        __$i84[__$i85] = __$i102;
        __r3 = this["_currBlock"];
        __$i110 = this;
        __$i111 = "_currBlock";
        __$i112 = _$1vBlock;
        if (__$i112) {
            __$i119 = __$i112;
        } else {
            __$i119 = _$1vElem;
        }
        if (__$i119) {
            __$i128 = undefined;
        } else {
            __$i128 = _$1block;
        }
        __$i110[__$i111] = __$i128;
        __r4 = this["elem"];
        this["elem"] = this["ctx"]["elem"];
        __r5 = this["mods"];
        __$i149 = this;
        __$i150 = "mods";
        if (_$1vBlock) {
            __$i165 = this["ctx"]["mods"];
        } else {
            __$i165 = this["mods"];
        }
        if (__$i165) {
            __$i173 = __$i165;
        } else {
            __$i173 = {};
        }
        __$i149[__$i150] = __$i173;
        __r6 = this["elemMods"];
        __$i181 = this;
        __$i182 = "elemMods";
        __$i187 = this["ctx"]["elemMods"];
        if (__$i187) {
            __$i194 = __$i187;
        } else {
            __$i194 = {};
        }
        __$i181[__$i182] = __$i194;
        __$i199 = this["block"];
        if (__$i199) {
            __$i208 = __$i199;
        } else {
            __$i208 = this["elem"];
        }
        if (__$i208) {
            __$i211 = this;
            __$i212 = "position";
            __$i215 = this["position"];
            if (__$i215) {
                __$i222 = __$i215;
            } else {
                __$i222 = 0;
            }
            __$i235 = __$i211[__$i212] = __$i222 + 1;
        } else {
            __$i235 = this["_listLength"]--;
        }
        return apply["call"](__this, __$fn54);
    }
    function $212(__$callback) {
        return __$callback.call(this, null, "");
    }
    function $e(__$callback) {
        throw new Error;
    }
    !function() {
        var BEM_ = {}, toString = Object.prototype.toString, SHORT_TAGS = {
            area: 1,
            base: 1,
            br: 1,
            col: 1,
            command: 1,
            embed: 1,
            hr: 1,
            img: 1,
            input: 1,
            keygen: 1,
            link: 1,
            meta: 1,
            param: 1,
            source: 1,
            wbr: 1
        };
        (function(BEM, undefined) {
            var MOD_DELIM = "_", ELEM_DELIM = "__", NAME_PATTERN = "[a-zA-Z0-9-]+";
            function buildModPostfix(modName, modVal, buffer) {
                buffer.push(MOD_DELIM, modName, MOD_DELIM, modVal);
            }
            function buildBlockClass(name, modName, modVal, buffer) {
                buffer.push(name);
                modVal && buildModPostfix(modName, modVal, buffer);
            }
            function buildElemClass(block, name, modName, modVal, buffer) {
                buildBlockClass(block, undefined, undefined, buffer);
                buffer.push(ELEM_DELIM, name);
                modVal && buildModPostfix(modName, modVal, buffer);
            }
            BEM.INTERNAL = {
                NAME_PATTERN: NAME_PATTERN,
                MOD_DELIM: MOD_DELIM,
                ELEM_DELIM: ELEM_DELIM,
                buildModPostfix: function(modName, modVal, buffer) {
                    var res = buffer || [];
                    buildModPostfix(modName, modVal, res);
                    return buffer ? res : res.join("");
                },
                buildClass: function(block, elem, modName, modVal, buffer) {
                    var typeOf = typeof modName;
                    if (typeOf == "string") {
                        if (typeof modVal != "string") {
                            buffer = modVal;
                            modVal = modName;
                            modName = elem;
                            elem = undefined;
                        } else {
                            undefined;
                        }
                    } else {
                        if (typeOf != "undefined") {
                            buffer = modName;
                            modName = undefined;
                        } else {
                            if (elem && typeof elem != "string") {
                                buffer = elem;
                                elem = undefined;
                            } else {
                                undefined;
                            }
                        }
                    }
                    if (!(elem || modName || buffer)) {
                        return block;
                    } else {
                        undefined;
                    }
                    var res = buffer || [];
                    elem ? buildElemClass(block, elem, modName, modVal, res) : buildBlockClass(block, modName, modVal, res);
                    return buffer ? res : res.join("");
                },
                buildModsClasses: function(block, elem, mods, buffer) {
                    var res = buffer || [];
                    if (mods) {
                        var modName;
                        for (modName in mods) {
                            if (!mods.hasOwnProperty(modName)) {
                                continue;
                            } else {
                                undefined;
                            }
                            var modVal = mods[modName];
                            if (modVal == null) {
                                continue;
                            } else {
                                undefined;
                            }
                            modVal = mods[modName] + "";
                            if (!modVal) {
                                continue;
                            } else {
                                undefined;
                            }
                            res.push(" ");
                            if (elem) {
                                buildElemClass(block, elem, modName, modVal, res);
                            } else {
                                buildBlockClass(block, modName, modVal, res);
                            }
                        }
                    } else {
                        undefined;
                    }
                    return buffer ? res : res.join("");
                },
                buildClasses: function(block, elem, mods, buffer) {
                    var res = buffer || [];
                    elem ? buildElemClass(block, elem, undefined, undefined, res) : buildBlockClass(block, undefined, undefined, res);
                    this.buildModsClasses(block, elem, mods, buffer);
                    return buffer ? res : res.join("");
                }
            };
        })(BEM_);
        var buildEscape = function() {
            var ts = {
                '"': "&quot;",
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;"
            }, f = function(t) {
                return ts[t] || t;
            };
            return function(r) {
                r = new RegExp(r, "g");
                return function(s) {
                    return ("" + s).replace(r, f);
                };
            };
        }();
        function BEMContext(context, apply_) {
            this.ctx = typeof context === null ? "" : context;
            this.apply = apply_;
            this._buf = [];
            this._ = this;
            this._start = true;
            this._mode = "";
            this._listLength = 0;
            this._notNewList = false;
            this.position = 0;
            this.block = undefined;
            this.elem = undefined;
            this.mods = undefined;
            this.elemMods = undefined;
        }
        BEMContext.prototype.isArray = function isArray(obj) {
            return toString.call(obj) === "[object Array]";
        };
        BEMContext.prototype.isSimple = function isSimple(obj) {
            var t = typeof obj;
            return t === "string" || t === "number" || t === "boolean";
        };
        BEMContext.prototype.isShortTag = function isShortTag(t) {
            return SHORT_TAGS.hasOwnProperty(t);
        };
        BEMContext.prototype.extend = function extend(o1, o2) {
            if (!o1 || !o2) {
                return o1 || o2;
            } else {
                undefined;
            }
            var res = {}, n;
            for (n in o1) {
                o1.hasOwnProperty(n) && (res[n] = o1[n]);
            }
            for (n in o2) {
                o2.hasOwnProperty(n) && (res[n] = o2[n]);
            }
            return res;
        };
        BEMContext.prototype.identify = function() {
            var cnt = 0, id = BEM_["__id"] = +(new Date), expando = "__" + id, get = function() {
                return "uniq" + id + ++cnt;
            };
            return function(obj, onlyGet) {
                if (!obj) {
                    return get();
                } else {
                    undefined;
                }
                if (onlyGet || obj[expando]) {
                    return obj[expando];
                } else {
                    return obj[expando] = get();
                }
            };
        }();
        BEMContext.prototype.xmlEscape = buildEscape("[&<>]");
        BEMContext.prototype.attrEscape = buildEscape('["&<>]');
        BEMContext.prototype.BEM = BEM_;
        BEMContext.prototype.isFirst = function isFirst() {
            return this.position === 1;
        };
        BEMContext.prototype.isLast = function isLast() {
            return this.position === this._listLength;
        };
        BEMContext.prototype.generateId = function generateId() {
            return this.identify(this.ctx);
        };
        exports.apply = BEMContext.apply = function _apply() {
            var ctx = new BEMContext(this, apply);
            ctx.apply();
            return ctx._buf.join("");
        };
    }();
    return exports;
    exports.apply = apply;
    function apply(callback) {
        if (typeof callback !== "function") {
            var reqq = apply.reqq, resq = apply.resq, result;
            delete apply.reqq;
            delete apply.resq;
            applySync.call(this, function(err, r) {
                if (err) throw err;
                result = r;
            });
            apply.reqq = reqq;
            apply.resq = resq;
            return result;
        }
        var reqq = apply.reqq || [], resq = apply.resq || [];
        reqq.push({
            self: this,
            res: null,
            callback: callback
        });
        if (apply.reqq && apply.resq) return;
        apply.reqq = reqq;
        apply.resq = resq;
        while (reqq.length !== 0 || resq.length !== 0) {
            if (reqq.length !== 0) {
                var item = reqq.pop();
                (function(item) {
                    applySync.call(item.self, function(err, r) {
                        if (err) throw err;
                        item.res = r;
                        resq.push(item);
                    });
                })(item);
            }
            if (resq.length !== 0) {
                var item = resq.shift();
                item.callback.call(item.self, null, item.res);
            }
        }
        delete apply.reqq;
        delete apply.resq;
        return null;
    }
    function applySync(__$callback) {
        var __t = this._mode;
        if (__t === "default") {
            var __t = this.block;
            if (__t === "i-jquery") {
                if (!(this["__$anflg549357759"] !== true) === false) {
                    if (!!this.elem === false) {
                        return $6.call(this, __$callback);
                    } else {
                        return $9.call(this, __$callback);
                    }
                } else {
                    return $9.call(this, __$callback);
                }
            } else if (__t === "b-page") {
                if (this.elem === "css") {
                    if (!this.ctx.hasOwnProperty("ie") === false) {
                        if (!!this.ctx._ieCommented === false) {
                            return $18.call(this, __$callback);
                        } else {
                            return $23.call(this, __$callback);
                        }
                    } else {
                        return $23.call(this, __$callback);
                    }
                } else {
                    return $23.call(this, __$callback);
                }
            } else {
                return $174.call(this, __$callback);
            }
        } else if (__t === "attrs") {
            if (this.block === "b-page") {
                var __t = this.elem;
                if (__t === "js") {
                    if (!this.ctx.url === false) {
                        return $91.call(this, __$callback);
                    } else {
                        return $106.call(this, __$callback);
                    }
                } else if (__t === "css") {
                    if (!this.ctx.url === false) {
                        return $96.call(this, __$callback);
                    } else {
                        return $106.call(this, __$callback);
                    }
                } else if (__t === "favicon") {
                    return $100.call(this, __$callback);
                } else if (__t === "meta") {
                    return $102.call(this, __$callback);
                } else {
                    return $106.call(this, __$callback);
                }
            } else {
                return $106.call(this, __$callback);
            }
        } else if (__t === "bem") {
            var __t = this.block;
            if (__t === "b-page") {
                var __t = this.elem;
                if (__t === "js") {
                    return $110.call(this, __$callback);
                } else if (__t === "css") {
                    return $112.call(this, __$callback);
                } else if (__t === "favicon") {
                    return $114.call(this, __$callback);
                } else if (__t === "meta") {
                    return $116.call(this, __$callback);
                } else if (__t === "head") {
                    return $118.call(this, __$callback);
                } else if (__t === "root") {
                    return $120.call(this, __$callback);
                } else {
                    return $129.call(this, __$callback);
                }
            } else if (__t === "i-ua") {
                if (!!this.elem === false) {
                    return $125.call(this, __$callback);
                } else {
                    return $129.call(this, __$callback);
                }
            } else {
                return $129.call(this, __$callback);
            }
        } else if (__t === "cls") {
            if (this.block === "b-page") {
                if (this.elem === "root") {
                    return $133.call(this, __$callback);
                } else {
                    return $137.call(this, __$callback);
                }
            } else {
                return $137.call(this, __$callback);
            }
        } else if (__t === "tag") {
            var __t = this.block;
            if (__t === "footer") {
                if (!!this.elem === false) {
                    return $36.call(this, __$callback);
                } else {
                    return $86.call(this, __$callback);
                }
            } else if (__t === "prompting") {
                if (!!this.elem === false) {
                    return $41.call(this, __$callback);
                } else {
                    return $86.call(this, __$callback);
                }
            } else if (__t === "sidebar") {
                if (!!this.elem === false) {
                    return $46.call(this, __$callback);
                } else {
                    return $86.call(this, __$callback);
                }
            } else if (__t === "main") {
                if (!!this.elem === false) {
                    return $51.call(this, __$callback);
                } else {
                    return $86.call(this, __$callback);
                }
            } else if (__t === "header") {
                if (!!this.elem === false) {
                    return $56.call(this, __$callback);
                } else {
                    return $86.call(this, __$callback);
                }
            } else if (__t === "b-page") {
                var __t = this.elem;
                if (__t === "js") {
                    return $61.call(this, __$callback);
                } else if (__t === "css") {
                    if (!this.ctx.url === false) {
                        return $64.call(this, __$callback);
                    } else {
                        return $66.call(this, __$callback);
                    }
                } else if (__t === "favicon") {
                    return $68.call(this, __$callback);
                } else if (__t === "meta") {
                    return $70.call(this, __$callback);
                } else if (__t === "head") {
                    return $72.call(this, __$callback);
                } else if (__t === "root") {
                    return $74.call(this, __$callback);
                } else {
                    if (!!this.elem === false) {
                        return $77.call(this, __$callback);
                    } else {
                        return $86.call(this, __$callback);
                    }
                }
            } else if (__t === "i-ua") {
                if (!!this.elem === false) {
                    return $82.call(this, __$callback);
                } else {
                    return $86.call(this, __$callback);
                }
            } else {
                return $86.call(this, __$callback);
            }
        } else if (__t === "xUACompatible") {
            if (this.block === "b-page") {
                if (!!this.elem === false) {
                    return $149.call(this, __$callback);
                } else {
                    return $174.call(this, __$callback);
                }
            } else {
                return $174.call(this, __$callback);
            }
        } else if (__t === "doctype") {
            if (this.block === "b-page") {
                if (!!this.elem === false) {
                    return $157.call(this, __$callback);
                } else {
                    return $174.call(this, __$callback);
                }
            } else {
                return $174.call(this, __$callback);
            }
        } else if (__t === "content") {
            if (this.block === "i-ua") {
                if (!!this.elem === false) {
                    return $165.call(this, __$callback);
                } else {
                    return $169.call(this, __$callback);
                }
            } else {
                return $169.call(this, __$callback);
            }
        } else if (__t === "jsAttr") {
            return $171.call(this, __$callback);
        } else if (__t === "js") {
            return $173.call(this, __$callback);
        } else if (__t === "mix") {
            if (this.block === "b-page") {
                if (!!this.elem === false) {
                    return $141.call(this, __$callback);
                } else {
                    return $145.call(this, __$callback);
                }
            } else {
                return $145.call(this, __$callback);
            }
        } else {
            return $174.call(this, __$callback);
        }
    }
    return exports;
})(typeof exports === "undefined" ? {} : exports);;
  return function(options) {
    if (!options) options = {};
    cache = options.cache;
    return xjst.apply.call(
[this]
    );
  };
}();
typeof exports === "undefined" || (exports.BEMHTML = BEMHTML);