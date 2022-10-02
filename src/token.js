import { InjectionKey } from "vue";
import Sdk from "casdoor-js-sdk";

const CASDOOR_SDK_TOKEN = '$casdoor-sdk';

/**
 * @summary  Injection token used to `provide` / `inject` the `Sdk` instance.
 * @type { InjectionKey<Sdk> }
 */
export const CASDOOR_SDK_INJECTION_KEY = Symbol.for(CASDOOR_SDK_TOKEN);
