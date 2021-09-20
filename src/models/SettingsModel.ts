type SettingsLangauge = "en" | "sv";

export interface SettingsObject {
    language: SettingsLangauge
    fun: FunObject
}

interface FunObject {
    confetti: boolean
}

export class SettingsModel {
    settings: SettingsObject;
    saving: boolean;

    listeners: Array<Function>;

    constructor() {
        this.listeners = [];
        this.saving = true;
        if(!this.localStorageAvailable()) {
            this.saving = false;
            return
        }
        if(!window.localStorage.getItem("refolkSettings")) {
            window.localStorage.setItem("refolkSettings", JSON.stringify({
                language: window.navigator.language.startsWith("sv") ? "sv" : "en",
                fun: {
                    confetti: false
                }
            }));
        }
        this.readFromStorage();
        this.writeToStorage();
    }

    private localStorageAvailable() {
        try {
            window.localStorage.setItem("testing", "testing");
            window.localStorage.removeItem("testing");
            return true;
        } catch (e) {
            return false;
        }
    }

    private readFromStorage() {
        this.settings = JSON.parse(window.localStorage.getItem("refolkSettings"));
        this.createUpdateEvent();
    }

    private writeToStorage() {
        window.localStorage.setItem("refolkSettings", JSON.stringify(this.settings));
    }

    addListener(l: Function) {
        this.listeners.push(l);
    }

    createUpdateEvent() {
        this.listeners.map((l) => {
            l(this.settings);
        })
    }

    setSettings(s: SettingsObject) {
        this.settings = s;
        if(this.saving) this.writeToStorage();
        this.createUpdateEvent();
    }
}