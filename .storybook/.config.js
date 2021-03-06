import { configure, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';

function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

addParameters({
  options: {
    theme: create({
      base: 'dark',
      brandTitle: 'React Twitch Embed Video',
      brandUrl: 'https://github.com/talk2MeGooseman/react-twitch-embed-video',
    }),
    /**
     * name to display in the top left corner
     * @type {String}
     */
    name: 'React Twitch Embed Video',
    /**
     * URL for name in top left corner to link to
     * @type {String}
     */
    url: 'https://github.com/talk2MeGooseman/react-twitch-embed-video',
    /**
     * show story component as full screen
     * @type {Boolean}
     */
    isFullscreen: false,
    /**
     * display panel that shows a list of stories
     * @type {Boolean}
     */
    showNav: true,
    /**
     * display panel that shows addon configurations
     * @type {Boolean}
     */
    showPanel: true,
    /**
     * where to show the addon panel
     * @type {('bottom'|'right')}
     */
    panelPosition: 'bottom',
    /**
     * regex for finding the hierarchy separator
     * @example:
     *   null - turn off hierarchy
     *   /\// - split by `/`
     *   /\./ - split by `.`
     *   /\/|\./ - split by `/` or `.`
     * @type {Regex}
     */
    hierarchySeparator: /\/|\./,
    /**
     * regex for finding the hierarchy root separator
     * @example:
     *   null - turn off multiple hierarchy roots
     *   /\|/ - split by `|`
     * @type {Regex}
     */
    hierarchyRootSeparator: /\|/,
    /**
     * sidebar tree animations
     * @type {Boolean}
     */
    sidebarAnimations: true,
    /**
     * enable/disable shortcuts
     * @type {Boolean}
     */
    enableShortcuts: true,
    /**
     * show/hide tool bar
     * @type {Boolean}
     */
    isToolshown: true,
    /**
     * function to sort stories in the tree view
     * common use is alphabetical `(a, b) => a[1].id.localeCompare(b[1].id)`
     * if left undefined, then the order in which the stories are imported will
     * be the order they display
     * @type {Function}
     */
    storySort: undefined,
  },
});

configure(loadStories, module);
