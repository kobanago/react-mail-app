var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
    for (var name in all) __defProp(target, name, { get: all[name], enumerable: !0 });
  },
  __copyProps = (to, from, except, desc) => {
    if ((from && typeof from == 'object') || typeof from == 'function')
      for (let key of __getOwnPropNames(from))
        !__hasOwnProp.call(to, key) &&
          key !== except &&
          __defProp(to, key, {
            get: () => from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
          });
    return to;
  };
var __toCommonJS = (mod) => __copyProps(__defProp({}, '__esModule', { value: !0 }), mod);
var globals_module_info_exports = {};
__export(globals_module_info_exports, {
  globalsModuleInfoMap: () => globalsModuleInfoMap,
});
module.exports = __toCommonJS(globals_module_info_exports);
var exports_default = {
  react: [
    'Children',
    'Component',
    'Fragment',
    'Profiler',
    'PureComponent',
    'StrictMode',
    'Suspense',
    '__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED',
    'cloneElement',
    'createContext',
    'createElement',
    'createFactory',
    'createRef',
    'forwardRef',
    'isValidElement',
    'lazy',
    'memo',
    'useCallback',
    'useContext',
    'useDebugValue',
    'useEffect',
    'useImperativeHandle',
    'useLayoutEffect',
    'useMemo',
    'useReducer',
    'useRef',
    'useState',
    'version',
  ],
  'react-dom': [
    '__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED',
    'createPortal',
    'findDOMNode',
    'flushSync',
    'hydrate',
    'render',
    'unmountComponentAtNode',
    'unstable_batchedUpdates',
    'unstable_createPortal',
    'unstable_renderSubtreeIntoContainer',
    'version',
  ],
  '@storybook/components': [
    'A',
    'ActionBar',
    'AddonPanel',
    'Badge',
    'Bar',
    'Blockquote',
    'Button',
    'ClipboardCode',
    'Code',
    'DL',
    'Div',
    'DocumentWrapper',
    'ErrorFormatter',
    'FlexBar',
    'Form',
    'H1',
    'H2',
    'H3',
    'H4',
    'H5',
    'H6',
    'HR',
    'IconButton',
    'IconButtonSkeleton',
    'Icons',
    'Img',
    'LI',
    'Link',
    'ListItem',
    'Loader',
    'OL',
    'P',
    'Placeholder',
    'Pre',
    'ResetWrapper',
    'ScrollArea',
    'Separator',
    'Spaced',
    'Span',
    'StorybookIcon',
    'StorybookLogo',
    'Symbols',
    'SyntaxHighlighter',
    'TT',
    'TabBar',
    'TabButton',
    'TabWrapper',
    'Table',
    'Tabs',
    'TabsState',
    'TooltipLinkList',
    'TooltipMessage',
    'TooltipNote',
    'UL',
    'WithTooltip',
    'WithTooltipPure',
    'Zoom',
    'codeCommon',
    'components',
    'createCopyToClipboardFunction',
    'getStoryHref',
    'icons',
    'interleaveSeparators',
    'nameSpaceClassNames',
    'resetComponents',
    'withReset',
  ],
  '@storybook/channels': [
    'Channel',
    'PostMessageTransport',
    'WebsocketTransport',
    'createBrowserChannel',
    'createPostMessageChannel',
    'createWebSocketChannel',
  ],
  '@storybook/core-events': [
    'CHANNEL_CREATED',
    'CONFIG_ERROR',
    'CURRENT_STORY_WAS_SET',
    'DOCS_PREPARED',
    'DOCS_RENDERED',
    'FORCE_REMOUNT',
    'FORCE_RE_RENDER',
    'GLOBALS_UPDATED',
    'IGNORED_EXCEPTION',
    'NAVIGATE_URL',
    'PLAY_FUNCTION_THREW_EXCEPTION',
    'PRELOAD_ENTRIES',
    'PREVIEW_BUILDER_PROGRESS',
    'PREVIEW_KEYDOWN',
    'REGISTER_SUBSCRIPTION',
    'REQUEST_WHATS_NEW_DATA',
    'RESET_STORY_ARGS',
    'RESULT_WHATS_NEW_DATA',
    'SELECT_STORY',
    'SET_CONFIG',
    'SET_CURRENT_STORY',
    'SET_GLOBALS',
    'SET_INDEX',
    'SET_STORIES',
    'SET_WHATS_NEW_CACHE',
    'SHARED_STATE_CHANGED',
    'SHARED_STATE_SET',
    'STORIES_COLLAPSE_ALL',
    'STORIES_EXPAND_ALL',
    'STORY_ARGS_UPDATED',
    'STORY_CHANGED',
    'STORY_ERRORED',
    'STORY_INDEX_INVALIDATED',
    'STORY_MISSING',
    'STORY_PREPARED',
    'STORY_RENDERED',
    'STORY_RENDER_PHASE_CHANGED',
    'STORY_SPECIFIED',
    'STORY_THREW_EXCEPTION',
    'STORY_UNCHANGED',
    'TELEMETRY_ERROR',
    'TOGGLE_WHATS_NEW_NOTIFICATIONS',
    'UPDATE_GLOBALS',
    'UPDATE_QUERY_PARAMS',
    'UPDATE_STORY_ARGS',
  ],
  '@storybook/router': [
    'BaseLocationProvider',
    'DEEPLY_EQUAL',
    'Link',
    'Location',
    'LocationProvider',
    'Match',
    'Route',
    'buildArgsParam',
    'deepDiff',
    'getMatch',
    'parsePath',
    'queryFromLocation',
    'queryFromString',
    'stringifyQuery',
    'useNavigate',
  ],
  '@storybook/theming': [
    'CacheProvider',
    'ClassNames',
    'Global',
    'ThemeProvider',
    'background',
    'color',
    'convert',
    'create',
    'createCache',
    'createGlobal',
    'createReset',
    'css',
    'darken',
    'ensure',
    'ignoreSsrWarning',
    'isPropValid',
    'jsx',
    'keyframes',
    'lighten',
    'styled',
    'themes',
    'typography',
    'useTheme',
    'withTheme',
  ],
  '@storybook/api': [
    'ActiveTabs',
    'Consumer',
    'ManagerContext',
    'Provider',
    'addons',
    'combineParameters',
    'controlOrMetaKey',
    'controlOrMetaSymbol',
    'eventMatchesShortcut',
    'eventToShortcut',
    'isMacLike',
    'isShortcutTaken',
    'keyToSymbol',
    'merge',
    'mockChannel',
    'optionOrAltSymbol',
    'shortcutMatchesShortcut',
    'shortcutToHumanString',
    'types',
    'useAddonState',
    'useArgTypes',
    'useArgs',
    'useChannel',
    'useGlobalTypes',
    'useGlobals',
    'useParameter',
    'useSharedState',
    'useStoryPrepared',
    'useStorybookApi',
    'useStorybookState',
  ],
  '@storybook/manager-api': [
    'ActiveTabs',
    'Consumer',
    'ManagerContext',
    'Provider',
    'addons',
    'combineParameters',
    'controlOrMetaKey',
    'controlOrMetaSymbol',
    'eventMatchesShortcut',
    'eventToShortcut',
    'isMacLike',
    'isShortcutTaken',
    'keyToSymbol',
    'merge',
    'mockChannel',
    'optionOrAltSymbol',
    'shortcutMatchesShortcut',
    'shortcutToHumanString',
    'types',
    'useAddonState',
    'useArgTypes',
    'useArgs',
    'useChannel',
    'useGlobalTypes',
    'useGlobals',
    'useParameter',
    'useSharedState',
    'useStoryPrepared',
    'useStorybookApi',
    'useStorybookState',
  ],
  '@storybook/addons': ['addons', 'types', 'mockChannel'],
  '@storybook/client-logger': ['deprecate', 'logger', 'once', 'pretty'],
  '@storybook/types': ['Addon_TypesEnum'],
};
var globalsNameReferenceMap = {
    react: '__REACT__',
    'react-dom': '__REACT_DOM__',
    '@storybook/components': '__STORYBOOK_COMPONENTS__',
    '@storybook/channels': '__STORYBOOK_CHANNELS__',
    '@storybook/core-events': '__STORYBOOK_CORE_EVENTS__',
    '@storybook/router': '__STORYBOOK_ROUTER__',
    '@storybook/theming': '__STORYBOOK_THEMING__',
    '@storybook/api': '__STORYBOOK_API__',
    '@storybook/manager-api': '__STORYBOOK_API__',
    '@storybook/addons': '__STORYBOOK_ADDONS__',
    '@storybook/client-logger': '__STORYBOOK_CLIENT_LOGGER__',
    '@storybook/types': '__STORYBOOK_TYPES__',
  },
  globalPackages = Object.keys(globalsNameReferenceMap);
var globalsModuleInfoMap = globalPackages.reduce(
  (acc, key) => (
    (acc[key] = {
      type: 'esm',
      varName: globalsNameReferenceMap[key],
      namedExports: exports_default[key],
      defaultExport: !0,
    }),
    acc
  ),
  {},
);
0 && (module.exports = { globalsModuleInfoMap });
