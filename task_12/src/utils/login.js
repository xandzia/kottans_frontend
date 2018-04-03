export function anim(email, pswd, mySVG, armL, armR, eyeL, eyeR, nose, mouth, mouthBG, chin, face, name, pswRepeat, pswStore) {
    TweenMax.set(armL, {
        x: -50,
        y: 220,
        rotation: 105,
        transformOrigin: "top left"
    });
    TweenMax.set(armR, {
        x: 250,
        y: 390,
        rotation: -105,
        transformOrigin: "top right"
    });
    let caretPos,
        curEmailIndex,
        screenCenter,
        svgCoords,
        eyeMaxHorizD = 9,
        eyeMaxVertD = 8,
        noseMaxHorizD = 5,
        noseMaxVertD = 2,
        dFromC,
        eyeDistH,
        eyeLDistV,
        eyeRDistV,
        eyeDistR;

    function getCoord(e) {
        let carPos = email.selectionEnd,
            div = document.createElement("div"),
            span = document.createElement("span"),
            copyStyle = getComputedStyle(email),
            emailCoords = {},
            caretCoords = {},
            centerCoords = {};
	[].forEach.call(copyStyle, function (prop) {
            div.style[prop] = copyStyle[prop];
        });
        div.style.position = "absolute";
        document.body.appendChild(div);
        div.textContent = email.value.substr(0, carPos);
        span.textContent = email.value.substr(carPos) || ".";
        div.appendChild(span);

        emailCoords = getPosition(email); //console.log("emailCoords.x: " + emailCoords.x + ", emailCoords.y: " + emailCoords.y);
        caretCoords = getPosition(span); //console.log("caretCoords.x " + caretCoords.x + ", caretCoords.y: " + caretCoords.y);
        centerCoords = getPosition(mySVG); //console.log("centerCoords.x: " + centerCoords.x);
        svgCoords = getPosition(mySVG);
        screenCenter = centerCoords.x + mySVG.offsetWidth / 2; //console.log("screenCenter: " + screenCenter);
        caretPos = caretCoords.x + emailCoords.x; //console.log("caretPos: " + caretPos);

        dFromC = screenCenter - caretPos; //console.log("dFromC: " + dFromC);
        let pFromC = Math.round(caretPos / screenCenter * 100) / 100;
        if (pFromC < 1) {} else if (pFromC > 1) {
            pFromC -= 2;
            pFromC = Math.abs(pFromC);
        }

        eyeDistH = -dFromC * 0.05;
        if (eyeDistH > eyeMaxHorizD) {
            eyeDistH = eyeMaxHorizD;
        } else if (eyeDistH < -eyeMaxHorizD) {
            eyeDistH = -eyeMaxHorizD;
        }

        let eyeLCoords = {
            x: svgCoords.x + 104,
            y: svgCoords.y - 106
        };
        let eyeRCoords = {
            x: svgCoords.x + 104,
            y: svgCoords.y - 106
        };
        let noseCoords = {
            x: svgCoords.x + 100,
            y: svgCoords.y + 100
        };
        let mouthCoords = {
            x: svgCoords.x + 100,
            y: svgCoords.y + 100
        };
        let eyeLAngle = getAngle(
            eyeLCoords.x,
            eyeLCoords.y,
            emailCoords.x + caretCoords.x,
            emailCoords.y + 5
        );
        let eyeLX = Math.cos(eyeLAngle) * eyeMaxHorizD;
        let eyeLY = Math.sin(eyeLAngle) * eyeMaxVertD;
        let eyeRAngle = getAngle(
            eyeRCoords.x,
            eyeRCoords.y,
            emailCoords.x + caretCoords.x,
            emailCoords.y + 5
        );
        let eyeRX = Math.cos(eyeRAngle) * eyeMaxHorizD;
        let eyeRY = Math.sin(eyeRAngle) * eyeMaxVertD;
        let noseAngle = getAngle(
            noseCoords.x,
            noseCoords.y,
            emailCoords.x + caretCoords.x,
            emailCoords.y
        );
        let noseX = Math.cos(noseAngle) * noseMaxHorizD;
        let noseY = Math.sin(noseAngle) * noseMaxVertD;
        let mouthAngle = getAngle(
            mouthCoords.x,
            mouthCoords.y,
            emailCoords.x + caretCoords.x,
            emailCoords.y + 25
        );
        let mouthX = Math.cos(mouthAngle) * noseMaxHorizD;
        let mouthY = Math.sin(mouthAngle) * noseMaxVertD;
        let mouthR = Math.cos(mouthAngle) * 6;
        let chinX = mouthX * 0.8;
        let chinY = mouthY * 0.5;
        let chinS = 1 - dFromC * 0.15 / 100;
        if (chinS > 1) {
            chinS = 1 - (chinS - 1);
        }
        let faceX = mouthX * 0.3;
        let faceY = mouthY * 0.4;
        let faceSkew = Math.cos(mouthAngle) * 5;

        TweenMax.to(eyeL, 1, {
            x: -eyeLX,
            y: -eyeLY,
            ease: Expo.easeOut
        });
        TweenMax.to(eyeR, 1, {
            x: -eyeRX,
            y: -eyeRY,
            ease: Expo.easeOut
        });
        TweenMax.to(nose, 1, {
            x: -noseX,
            y: -noseY,
            rotation: mouthR,
            transformOrigin: "center center",
            ease: Expo.easeOut
        });
        TweenMax.to(mouth, 1, {
            x: -mouthX,
            y: -mouthY,
            rotation: mouthR,
            transformOrigin: "center center",
            ease: Expo.easeOut
        });
        TweenMax.to(chin, 1, {
            x: -chinX,
            y: -chinY,
            scaleY: chinS,
            ease: Expo.easeOut
        });
        TweenMax.to(face, 1, {
            x: -faceX,
            y: -faceY,
            skewX: -faceSkew,
            transformOrigin: "center top",
            ease: Expo.easeOut
        });

        document.body.removeChild(div);
    }

    function getCoordName(e) {
        let carPos = name.selectionEnd,
            div = document.createElement("div"),
            span = document.createElement("span"),
            copyStyle = getComputedStyle(name),
            nameCoords = {},
            caretCoords = {},
            centerCoords = {};
	[].forEach.call(copyStyle, function (prop) {
            div.style[prop] = copyStyle[prop];
        });
        div.style.position = "absolute";
        document.body.appendChild(div);
        div.textContent = name.value.substr(0, carPos);
        span.textContent = name.value.substr(carPos) || ".";
        div.appendChild(span);

        nameCoords = getPosition(name);
        caretCoords = getPosition(span);
        centerCoords = getPosition(mySVG);
        svgCoords = getPosition(mySVG);
        screenCenter = centerCoords.x + mySVG.offsetWidth / 2;
        caretPos = caretCoords.x + nameCoords.x;
        dFromC = screenCenter - caretPos;
        let pFromC = Math.round(caretPos / screenCenter * 100) / 100;
        if (pFromC < 1) {} else if (pFromC > 1) {
            pFromC -= 2;
            pFromC = Math.abs(pFromC);
        }

        eyeDistH = -dFromC * 0.05;
        if (eyeDistH > eyeMaxHorizD) {
            eyeDistH = eyeMaxHorizD;
        } else if (eyeDistH < -eyeMaxHorizD) {
            eyeDistH = -eyeMaxHorizD;
        }

        let eyeLCoords = {
            x: svgCoords.x + 104,
            y: svgCoords.y - 106
        };
        let eyeRCoords = {
            x: svgCoords.x + 104,
            y: svgCoords.y - 106
        };
        let noseCoords = {
            x: svgCoords.x + 100,
            y: svgCoords.y + 100
        };
        let mouthCoords = {
            x: svgCoords.x + 100,
            y: svgCoords.y + 100
        };
        let eyeLAngle = getAngle(
            eyeLCoords.x,
            eyeLCoords.y,
            nameCoords.x + caretCoords.x,
            nameCoords.y + 5
        );
        let eyeLX = Math.cos(eyeLAngle) * eyeMaxHorizD;
        let eyeLY = Math.sin(eyeLAngle) * eyeMaxVertD;
        let eyeRAngle = getAngle(
            eyeRCoords.x,
            eyeRCoords.y,
            nameCoords.x + caretCoords.x,
            nameCoords.y + 5
        );
        let eyeRX = Math.cos(eyeRAngle) * eyeMaxHorizD;
        let eyeRY = Math.sin(eyeRAngle) * eyeMaxVertD;
        let noseAngle = getAngle(
            noseCoords.x,
            noseCoords.y,
            nameCoords.x + caretCoords.x,
            nameCoords.y
        );
        let noseX = Math.cos(noseAngle) * noseMaxHorizD;
        let noseY = Math.sin(noseAngle) * noseMaxVertD;
        let mouthAngle = getAngle(
            mouthCoords.x,
            mouthCoords.y,
            nameCoords.x + caretCoords.x,
            nameCoords.y + 25
        );
        let mouthX = Math.cos(mouthAngle) * noseMaxHorizD;
        let mouthY = Math.sin(mouthAngle) * noseMaxVertD;
        let mouthR = Math.cos(mouthAngle) * 6;
        let chinX = mouthX * 0.8;
        let chinY = mouthY * 0.5;
        let chinS = 1 - dFromC * 0.15 / 100;
        if (chinS > 1) {
            chinS = 1 - (chinS - 1);
        }
        let faceX = mouthX * 0.3;
        let faceY = mouthY * 0.4;
        let faceSkew = Math.cos(mouthAngle) * 5;

        TweenMax.to(eyeL, 1, {
            x: -eyeLX,
            y: -eyeLY,
            ease: Expo.easeOut
        });
        TweenMax.to(eyeR, 1, {
            x: -eyeRX,
            y: -eyeRY,
            ease: Expo.easeOut
        });
        TweenMax.to(nose, 1, {
            x: -noseX,
            y: -noseY,
            rotation: mouthR,
            transformOrigin: "center center",
            ease: Expo.easeOut
        });
        TweenMax.to(mouth, 1, {
            x: -mouthX,
            y: -mouthY,
            rotation: mouthR,
            transformOrigin: "center center",
            ease: Expo.easeOut
        });
        TweenMax.to(chin, 1, {
            x: -chinX,
            y: -chinY,
            scaleY: chinS,
            ease: Expo.easeOut
        });
        TweenMax.to(face, 1, {
            x: -faceX,
            y: -faceY,
            skewX: -faceSkew,
            transformOrigin: "center top",
            ease: Expo.easeOut
        });

        document.body.removeChild(div);
    }

    function onEmailInput(e) {
        getCoord(e);
    }

    function onNameInput(e) {
        getCoordName(e);
    }

    function onEmailFocus(e) {
        e.target.parentElement.classList.add("focusWithText");
        getCoord();
    }

    function onEmailBlur(e) {
        if (e.target.value == "") {
            e.target.parentElement.classList.remove("focusWithText");
        }
        resetFace();
    }

    function onPasswordFocus(e) {
        coverEyes();
    }

    function onPasswordBlur(e) {
        uncoverEyes();
    }

    function coverEyes() {
        TweenMax.to(armL, 0.45, {
            x: -60,
            y: 55,
            rotation: -15,
            ease: Quad.easeOut
        });
        TweenMax.to(armR, 0.45, {
            x: 83,
            y: 10,
            rotation: 15,
            ease: Quad.easeOut,
            delay: 0.1
        });
    }

    function uncoverEyes() {
            TweenMax.to(armL, 1.35, {
                y: 220,
                ease: Quad.easeOut
            });
            TweenMax.to(armL, 1.35, {
                rotation: 105,
                ease: Quad.easeOut,
                delay: 0.1
            });
            console.log('uncover');
            TweenMax.to(armR, 1.35, {
                y: 400,
                ease: Quad.easeOut
            });
            TweenMax.to(armR, 1.35, {
                rotation: -85,
                ease: Quad.easeOut,
                delay: 0.1
            });
    }

    function resetFace() {
        TweenMax.to([eyeL, eyeR], 1, {
            x: 0,
            y: 0,
            ease: Expo.easeOut
        });
        TweenMax.to(nose, 1, {
            x: 0,
            y: 0,
            rotation: 0,
            scaleX: 1,
            scaleY: 1,
            ease: Expo.easeOut
        });
        TweenMax.to(mouth, 1, {
            x: 0,
            y: 0,
            rotation: 0,
            ease: Expo.easeOut
        });
        TweenMax.to(chin, 1, {
            x: 0,
            y: 0,
            scaleY: 1,
            ease: Expo.easeOut
        });
    }

    function getAngle(x1, y1, x2, y2) {
        let angle = Math.atan2(y1 - y2, x1 - x2);
        return angle;
    }

    function getPosition(el) {
        let xPos = 0;
        let yPos = 0;

        while (el) {
            if (el.tagName == "BODY") {
                // deal with browser quirks with body/window/document and page scroll
                let xScroll = el.scrollLeft || document.documentElement.scrollLeft;
                let yScroll = el.scrollTop || document.documentElement.scrollTop;

                xPos += el.offsetLeft - xScroll + el.clientLeft;
                yPos += el.offsetTop - yScroll + el.clientTop;
            } else {
                // for all other non-BODY elements
                xPos += el.offsetLeft - el.scrollLeft + el.clientLeft;
                yPos += el.offsetTop - el.scrollTop + el.clientTop;
            }

            el = el.offsetParent;
        }
        return {
            x: xPos,
            y: yPos
        };
    }
    
    email.addEventListener("focus", onEmailFocus);
    email.addEventListener("blur", onEmailBlur);
    email.addEventListener("input", onEmailInput);
    
    pswd.addEventListener("focusin", onPasswordFocus);
    pswd.addEventListener("focusout", onPasswordBlur);

    if (name, pswRepeat, pswStore) {
        name.addEventListener("focus", onEmailFocus);
        name.addEventListener("blur", onEmailBlur);
        name.addEventListener("input", onNameInput);

        pswRepeat.addEventListener("focus", onPasswordFocus);
        pswRepeat.addEventListener("blur", onPasswordBlur);

        pswStore.addEventListener("focusin", onPasswordFocus);
        pswStore.addEventListener("focusout", onPasswordBlur);
    };

};
