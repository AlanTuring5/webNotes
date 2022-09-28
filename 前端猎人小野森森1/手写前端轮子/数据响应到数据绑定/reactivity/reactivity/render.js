import { eventFormat, bindEvent, stateFormat } from './compiler'

function useDOM({ template, state, methods }, DOM) {
    DOM.innerHTML = render(template, state);
    bindEvent(methods);
}

function render(template, state) {
    template = eventFormat(template);
    template = stateFormat(template, state);
    return template;
}


export {
    useDOM,
}