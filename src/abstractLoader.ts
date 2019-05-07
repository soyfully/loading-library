
export abstract class abstractLoader implements iEtribeLoader {
    indicatorWrapper: HTMLElement;

    protected constructor(config: iShowConfig = {}) {

        config.renderAt = config.renderAt || document.body;

        this.indicatorWrapper = $(
            '<div class="etribe-loader" style="display:none;"></div>'
        )[0];

        $(this.indicatorWrapper).appendTo($(config.renderAt));

        if (config.renderAt == document.body) {
            $(this.indicatorWrapper).css({ position: 'fixed', top: 0, height: '100%', cursor: 'progress' });
            config.preventScroll = true;
        }

        if (this._hasValue(config, 'dim')) {
            this._setDim();
        }

        if (this._hasValue(config,'preventScroll')) {
            this._setPreventScroll();
        }

        this.setHTML();

        if (this._hasValue(config,'scale')) {
            this.setScale(config.scale);
        }

        if (this._hasValue(config,'color')) {
            this.setColor(config.color);
        }

        if (this._hasValue(config,'dimCssText')) {
            this._setDimCssText(config.dimCssText);
        }

        if (this._hasValue(config,'loadingText')) {
            this.setloadingText(config.loadingText);
        }
    }

    abstract setHTML(): void;
    abstract setScale(scale:number): void;
    abstract setColor(color:string): void;
    abstract setloadingText(color:string): void;

    show(): void {
        $(this.indicatorWrapper).show();
    }

    hide(): void {
        $(this.indicatorWrapper).remove();
        // 터치무브와 마우스휠 스크롤 방지 풀기
        this._removeEventListeners(document.body, 'scroll touchmove mousewheel', this._lockScroll);
        this.indicatorWrapper = null;
    }

    protected _hasValue(opt: any, name: string) {
        return opt.hasOwnProperty(name) && opt[name];
    }

    protected _setDim() {
        $(this.indicatorWrapper).addClass('etribe-loader-dim');
    }

    protected _setPreventScroll() : void {
        // 터치무브와 마우스휠 스크롤 방지
        this._addEventListeners(document.body, 'scroll touchmove mousewheel', this._lockScroll);
    }

    protected _lockScroll (e: Event): boolean {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }

    protected _setDimCssText (cssText: string) {
        this.indicatorWrapper.style.cssText = this.indicatorWrapper.style.cssText + ';' + cssText;
    }

    protected _addEventListeners (target: Element, eventNames: string, handler: EventListener) {
        eventNames.split(' ').forEach(function (evt) {
            target.addEventListener(evt, handler);
        })
    }

    protected _removeEventListeners (target: Element, events: string, handler: EventListener) {
        events.split(' ').forEach(function (evt) {
            target.removeEventListener(evt, handler);
        })
    }
}