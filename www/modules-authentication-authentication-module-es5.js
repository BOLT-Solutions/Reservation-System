function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-authentication-authentication-module"], {
  /***/
  "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js":
  /*!******************************************************************************!*\
    !*** ./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js ***!
    \******************************************************************************/

  /*! exports provided: AUTO_STYLE, AnimationBuilder, AnimationFactory, NoopAnimationPlayer, animate, animateChild, animation, group, keyframes, query, sequence, stagger, state, style, transition, trigger, useAnimation, ɵAnimationGroupPlayer, ɵPRE_STYLE */

  /***/
  function node_modulesAngularAnimations__ivy_ngcc__Fesm2015AnimationsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AUTO_STYLE", function () {
      return AUTO_STYLE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimationBuilder", function () {
      return AnimationBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimationFactory", function () {
      return AnimationFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NoopAnimationPlayer", function () {
      return NoopAnimationPlayer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "animate", function () {
      return animate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "animateChild", function () {
      return animateChild;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "animation", function () {
      return animation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "group", function () {
      return group;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "keyframes", function () {
      return keyframes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "query", function () {
      return query;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "sequence", function () {
      return sequence;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "stagger", function () {
      return stagger;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "state", function () {
      return state;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "style", function () {
      return style;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "transition", function () {
      return transition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "trigger", function () {
      return trigger;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "useAnimation", function () {
      return useAnimation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵAnimationGroupPlayer", function () {
      return AnimationGroupPlayer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵPRE_STYLE", function () {
      return ɵPRE_STYLE;
    });
    /**
     * @license Angular v9.1.13
     * (c) 2010-2020 Google LLC. https://angular.io/
     * License: MIT
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: packages/animations/src/animation_builder.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * An injectable service that produces an animation sequence programmatically within an
     * Angular component or directive.
     * Provided by the `BrowserAnimationsModule` or `NoopAnimationsModule`.
     *
     * \@usageNotes
     *
     * To use this service, add it to your component or directive as a dependency.
     * The service is instantiated along with your component.
     *
     * Apps do not typically need to create their own animation players, but if you
     * do need to, follow these steps:
     *
     * 1. Use the `build()` method to create a programmatic animation using the
     * `animate()` function. The method returns an `AnimationFactory` instance.
     *
     * 2. Use the factory object to create an `AnimationPlayer` and attach it to a DOM element.
     *
     * 3. Use the player object to control the animation programmatically.
     *
     * For example:
     *
     * ```ts
     * // import the service from BrowserAnimationsModule
     * import {AnimationBuilder} from '\@angular/animations';
     * // require the service as a dependency
     * class MyCmp {
     *   constructor(private _builder: AnimationBuilder) {}
     *
     *   makeAnimation(element: any) {
     *     // first define a reusable animation
     *     const myAnimation = this._builder.build([
     *       style({ width: 0 }),
     *       animate(1000, style({ width: '100px' }))
     *     ]);
     *
     *     // use the returned factory object to create a player
     *     const player = myAnimation.create(element);
     *
     *     player.play();
     *   }
     * }
     * ```
     *
     * \@publicApi
     * @abstract
     */


    var AnimationBuilder = function AnimationBuilder() {
      _classCallCheck(this, AnimationBuilder);
    };

    if (false) {}
    /**
     * A factory object returned from the `AnimationBuilder`.`build()` method.
     *
     * \@publicApi
     * @abstract
     */


    var AnimationFactory = function AnimationFactory() {
      _classCallCheck(this, AnimationFactory);
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/animations/src/animation_metadata.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Represents a set of CSS styles for use in an animation style.
     * @record
     */


    function ɵStyleData() {}
    /** @enum {number} */


    var AnimationMetadataType = {
      /**
       * Associates a named animation state with a set of CSS styles.
       * See `state()`
       */
      State: 0,

      /**
       * Data for a transition from one animation state to another.
       * See `transition()`
       */
      Transition: 1,

      /**
       * Contains a set of animation steps.
       * See `sequence()`
       */
      Sequence: 2,

      /**
       * Contains a set of animation steps.
       * See `{@link animations/group group()}`
       */
      Group: 3,

      /**
       * Contains an animation step.
       * See `animate()`
       */
      Animate: 4,

      /**
       * Contains a set of animation steps.
       * See `keyframes()`
       */
      Keyframes: 5,

      /**
       * Contains a set of CSS property-value pairs into a named style.
       * See `style()`
       */
      Style: 6,

      /**
       * Associates an animation with an entry trigger that can be attached to an element.
       * See `trigger()`
       */
      Trigger: 7,

      /**
       * Contains a re-usable animation.
       * See `animation()`
       */
      Reference: 8,

      /**
       * Contains data to use in executing child animations returned by a query.
       * See `animateChild()`
       */
      AnimateChild: 9,

      /**
       * Contains animation parameters for a re-usable animation.
       * See `useAnimation()`
       */
      AnimateRef: 10,

      /**
       * Contains child-animation query data.
       * See `query()`
       */
      Query: 11,

      /**
       * Contains data for staggering an animation sequence.
       * See `stagger()`
       */
      Stagger: 12
    };
    /**
     * Specifies automatic styling.
     *
     * \@publicApi
     * @type {?}
     */

    var AUTO_STYLE = '*';
    /**
     * Base for animation data structures.
     *
     * \@publicApi
     * @record
     */

    function AnimationMetadata() {}

    if (false) {}
    /**
     * Contains an animation trigger. Instantiated and returned by the
     * `trigger()` function.
     *
     * \@publicApi
     * @record
     */


    function AnimationTriggerMetadata() {}

    if (false) {}
    /**
     * Encapsulates an animation state by associating a state name with a set of CSS styles.
     * Instantiated and returned by the `state()` function.
     *
     * \@publicApi
     * @record
     */


    function AnimationStateMetadata() {}

    if (false) {}
    /**
     * Encapsulates an animation transition. Instantiated and returned by the
     * `transition()` function.
     *
     * \@publicApi
     * @record
     */


    function AnimationTransitionMetadata() {}

    if (false) {}
    /**
     * Encapsulates a reusable animation, which is a collection of individual animation steps.
     * Instantiated and returned by the `animation()` function, and
     * passed to the `useAnimation()` function.
     *
     * \@publicApi
     * @record
     */


    function AnimationReferenceMetadata() {}

    if (false) {}
    /**
     * Encapsulates an animation query. Instantiated and returned by
     * the `query()` function.
     *
     * \@publicApi
     * @record
     */


    function AnimationQueryMetadata() {}

    if (false) {}
    /**
     * Encapsulates a keyframes sequence. Instantiated and returned by
     * the `keyframes()` function.
     *
     * \@publicApi
     * @record
     */


    function AnimationKeyframesSequenceMetadata() {}

    if (false) {}
    /**
     * Encapsulates an animation style. Instantiated and returned by
     * the `style()` function.
     *
     * \@publicApi
     * @record
     */


    function AnimationStyleMetadata() {}

    if (false) {}
    /**
     * Encapsulates an animation step. Instantiated and returned by
     * the `animate()` function.
     *
     * \@publicApi
     * @record
     */


    function AnimationAnimateMetadata() {}

    if (false) {}
    /**
     * Encapsulates a child animation, that can be run explicitly when the parent is run.
     * Instantiated and returned by the `animateChild` function.
     *
     * \@publicApi
     * @record
     */


    function AnimationAnimateChildMetadata() {}

    if (false) {}
    /**
     * Encapsulates a reusable animation.
     * Instantiated and returned by the `useAnimation()` function.
     *
     * \@publicApi
     * @record
     */


    function AnimationAnimateRefMetadata() {}

    if (false) {}
    /**
     * Encapsulates an animation sequence.
     * Instantiated and returned by the `sequence()` function.
     *
     * \@publicApi
     * @record
     */


    function AnimationSequenceMetadata() {}

    if (false) {}
    /**
     * Encapsulates an animation group.
     * Instantiated and returned by the `{\@link animations/group group()}` function.
     *
     * \@publicApi
     * @record
     */


    function AnimationGroupMetadata() {}

    if (false) {}
    /**
     * Encapsulates parameters for staggering the start times of a set of animation steps.
     * Instantiated and returned by the `stagger()` function.
     *
     * \@publicApi
     *
     * @record
     */


    function AnimationStaggerMetadata() {}

    if (false) {}
    /**
     * Creates a named animation trigger, containing a  list of `state()`
     * and `transition()` entries to be evaluated when the expression
     * bound to the trigger changes.
     *
     * \@usageNotes
     * Define an animation trigger in the `animations` section of `\@Component` metadata.
     * In the template, reference the trigger by name and bind it to a trigger expression that
     * evaluates to a defined animation state, using the following format:
     *
     * `[\@triggerName]="expression"`
     *
     * Animation trigger bindings convert all values to strings, and then match the
     * previous and current values against any linked transitions.
     * Booleans can be specified as `1` or `true` and `0` or `false`.
     *
     * ### Usage Example
     *
     * The following example creates an animation trigger reference based on the provided
     * name value.
     * The provided animation value is expected to be an array consisting of state and
     * transition declarations.
     *
     * ```typescript
     * \@Component({
     *   selector: "my-component",
     *   templateUrl: "my-component-tpl.html",
     *   animations: [
     *     trigger("myAnimationTrigger", [
     *       state(...),
     *       state(...),
     *       transition(...),
     *       transition(...)
     *     ])
     *   ]
     * })
     * class MyComponent {
     *   myStatusExp = "something";
     * }
     * ```
     *
     * The template associated with this component makes use of the defined trigger
     * by binding to an element within its template code.
     *
     * ```html
     * <!-- somewhere inside of my-component-tpl.html -->
     * <div [\@myAnimationTrigger]="myStatusExp">...</div>
     * ```
     *
     * ### Using an inline function
     * The `transition` animation method also supports reading an inline function which can decide
     * if its associated animation should be run.
     *
     * ```typescript
     * // this method is run each time the `myAnimationTrigger` trigger value changes.
     * function myInlineMatcherFn(fromState: string, toState: string, element: any, params: {[key:
     * string]: any}): boolean {
     *   // notice that `element` and `params` are also available here
     *   return toState == 'yes-please-animate';
     * }
     *  /
     *   selector: 'my-component',
     *   templateUrl: 'my-component-tpl.html',
     *   animations: [
     *     trigger('myAnimationTrigger', [
     *       transition(myInlineMatcherFn, [
     *         // the animation sequence code
     *       ]),
     *     ])
     *   ]
     * })
     * class MyComponent {
     *   myStatusExp = "yes-please-animate";
     * }
     * ```
     *
     * ### Disabling Animations
     * When true, the special animation control binding `\@.disabled` binding prevents
     * all animations from rendering.
     * Place the  `\@.disabled` binding on an element to disable
     * animations on the element itself, as well as any inner animation triggers
     * within the element.
     *
     * The following example shows how to use this feature:
     *
     * ```typescript /
     *   selector: 'my-component',
     *   template: `
     *     <div [\@.disabled]="isDisabled">
     *       <div [\@childAnimation]="exp"></div>
     *     </div>
     *   `,
     *   animations: [
     *     trigger("childAnimation", [
     *       // ...
     *     ])
     *   ]
     * })
     * class MyComponent {
     *   isDisabled = true;
     *   exp = '...';
     * }
     * ```
     *
     * When `\@.disabled` is true, it prevents the `\@childAnimation` trigger from animating,
     * along with any inner animations.
     *
     * ### Disable animations application-wide
     * When an area of the template is set to have animations disabled,
     * **all** inner components have their animations disabled as well.
     * This means that you can disable all animations for an app
     * by placing a host binding set on `\@.disabled` on the topmost Angular component.
     *
     * ```typescript
     * import {Component, HostBinding} from '\@angular/core';
     *  /
     *   selector: 'app-component',
     *   templateUrl: 'app.component.html',
     * })
     * class AppComponent {
     * \@HostBinding('@.disabled')
     *   public animationsDisabled = true;
     * }
     * ```
     *
     * ### Overriding disablement of inner animations
     * Despite inner animations being disabled, a parent animation can `query()`
     * for inner elements located in disabled areas of the template and still animate
     * them if needed. This is also the case for when a sub animation is
     * queried by a parent and then later animated using `animateChild()`.
     *
     * ### Detecting when an animation is disabled
     * If a region of the DOM (or the entire application) has its animations disabled, the animation
     * trigger callbacks still fire, but for zero seconds. When the callback fires, it provides
     * an instance of an `AnimationEvent`. If animations are disabled,
     * the `.disabled` flag on the event is true.
     *
     * \@publicApi
     * @param {?} name An identifying string.
     * @param {?} definitions  An animation definition object, containing an array of `state()`
     * and `transition()` declarations.
     *
     * @return {?} An object that encapsulates the trigger data.
     *
     */


    function trigger(name, definitions) {
      return {
        type: 7
        /* Trigger */
        ,
        name: name,
        definitions: definitions,
        options: {}
      };
    }
    /**
     * Defines an animation step that combines styling information with timing information.
     *
     * \@usageNotes
     * Call within an animation `sequence()`, `{\@link animations/group group()}`, or
     * `transition()` call to specify an animation step
     * that applies given style data to the parent animation for a given amount of time.
     *
     * ### Syntax Examples
     * **Timing examples**
     *
     * The following examples show various `timings` specifications.
     * - `animate(500)` : Duration is 500 milliseconds.
     * - `animate("1s")` : Duration is 1000 milliseconds.
     * - `animate("100ms 0.5s")` : Duration is 100 milliseconds, delay is 500 milliseconds.
     * - `animate("5s ease-in")` : Duration is 5000 milliseconds, easing in.
     * - `animate("5s 10ms cubic-bezier(.17,.67,.88,.1)")` : Duration is 5000 milliseconds, delay is 10
     * milliseconds, easing according to a bezier curve.
     *
     * **Style examples**
     *
     * The following example calls `style()` to set a single CSS style.
     * ```typescript
     * animate(500, style({ background: "red" }))
     * ```
     * The following example calls `keyframes()` to set a CSS style
     * to different values for successive keyframes.
     * ```typescript
     * animate(500, keyframes(
     *  [
     *   style({ background: "blue" })),
     *   style({ background: "red" }))
     *  ])
     * ```
     *
     * \@publicApi
     * @param {?} timings Sets `AnimateTimings` for the parent animation.
     * A string in the format "duration [delay] [easing]".
     *  - Duration and delay are expressed as a number and optional time unit,
     * such as "1s" or "10ms" for one second and 10 milliseconds, respectively.
     * The default unit is milliseconds.
     *  - The easing value controls how the animation accelerates and decelerates
     * during its runtime. Value is one of  `ease`, `ease-in`, `ease-out`,
     * `ease-in-out`, or a `cubic-bezier()` function call.
     * If not supplied, no easing is applied.
     *
     * For example, the string "1s 100ms ease-out" specifies a duration of
     * 1000 milliseconds, and delay of 100 ms, and the "ease-out" easing style,
     * which decelerates near the end of the duration.
     * @param {?=} styles Sets AnimationStyles for the parent animation.
     * A function call to either `style()` or `keyframes()`
     * that returns a collection of CSS style entries to be applied to the parent animation.
     * When null, uses the styles from the destination state.
     * This is useful when describing an animation step that will complete an animation;
     * see "Animating to the final state" in `transitions()`.
     * @return {?} An object that encapsulates the animation step.
     *
     */


    function animate(timings) {
      var styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return {
        type: 4
        /* Animate */
        ,
        styles: styles,
        timings: timings
      };
    }
    /**
     * \@description Defines a list of animation steps to be run in parallel.
     *
     * \@usageNotes
     * Grouped animations are useful when a series of styles must be
     * animated at different starting times and closed off at different ending times.
     *
     * When called within a `sequence()` or a
     * `transition()` call, does not continue to the next
     * instruction until all of the inner animation steps have completed.
     *
     * \@publicApi
     * @param {?} steps An array of animation step objects.
     * - When steps are defined by `style()` or `animate()`
     * function calls, each call within the group is executed instantly.
     * - To specify offset styles to be applied at a later time, define steps with
     * `keyframes()`, or use `animate()` calls with a delay value.
     * For example:
     *
     * ```typescript
     * group([
     *   animate("1s", style({ background: "black" })),
     *   animate("2s", style({ color: "white" }))
     * ])
     * ```
     *
     * @param {?=} options An options object containing a delay and
     * developer-defined parameters that provide styling defaults and
     * can be overridden on invocation.
     *
     * @return {?} An object that encapsulates the group data.
     *
     */


    function group(steps) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return {
        type: 3
        /* Group */
        ,
        steps: steps,
        options: options
      };
    }
    /**
     * Defines a list of animation steps to be run sequentially, one by one.
     *
     * \@usageNotes
     * When you pass an array of steps to a
     * `transition()` call, the steps run sequentially by default.
     * Compare this to the `{\@link animations/group group()}` call, which runs animation steps in
     * parallel.
     *
     * When a sequence is used within a `{\@link animations/group group()}` or a `transition()` call,
     * execution continues to the next instruction only after each of the inner animation
     * steps have completed.
     *
     * \@publicApi
     *
     * @param {?} steps An array of animation step objects.
     * - Steps defined by `style()` calls apply the styling data immediately.
     * - Steps defined by `animate()` calls apply the styling data over time
     *   as specified by the timing data.
     *
     * ```typescript
     * sequence([
     *   style({ opacity: 0 }),
     *   animate("1s", style({ opacity: 1 }))
     * ])
     * ```
     *
     * @param {?=} options An options object containing a delay and
     * developer-defined parameters that provide styling defaults and
     * can be overridden on invocation.
     *
     * @return {?} An object that encapsulates the sequence data.
     *
     */


    function sequence(steps) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return {
        type: 2
        /* Sequence */
        ,
        steps: steps,
        options: options
      };
    }
    /**
     * Declares a key/value object containing CSS properties/styles that
     * can then be used for an animation `state`, within an animation `sequence`,
     * or as styling data for calls to `animate()` and `keyframes()`.
     *
     * \@usageNotes
     * The following examples create animation styles that collect a set of
     * CSS property values:
     *
     * ```typescript
     * // string values for CSS properties
     * style({ background: "red", color: "blue" })
     *
     * // numerical pixel values
     * style({ width: 100, height: 0 })
     * ```
     *
     * The following example uses auto-styling to allow a component to animate from
     * a height of 0 up to the height of the parent element:
     *
     * ```
     * style({ height: 0 }),
     * animate("1s", style({ height: "*" }))
     * ```
     *
     * \@publicApi
     *
     * @param {?} tokens A set of CSS styles or HTML styles associated with an animation state.
     * The value can be any of the following:
     * - A key-value style pair associating a CSS property with a value.
     * - An array of key-value style pairs.
     * - An asterisk (*), to use auto-styling, where styles are derived from the element
     * being animated and applied to the animation when it starts.
     *
     * Auto-styling can be used to define a state that depends on layout or other
     * environmental factors.
     *
     * @return {?} An object that encapsulates the style data.
     *
     */


    function style(tokens) {
      return {
        type: 6
        /* Style */
        ,
        styles: tokens,
        offset: null
      };
    }
    /**
     * Declares an animation state within a trigger attached to an element.
     *
     * \@usageNotes
     * Use the `trigger()` function to register states to an animation trigger.
     * Use the `transition()` function to animate between states.
     * When a state is active within a component, its associated styles persist on the element,
     * even when the animation ends.
     *
     * \@publicApi
     *
     * @param {?} name One or more names for the defined state in a comma-separated string.
     * The following reserved state names can be supplied to define a style for specific use
     * cases:
     *
     * - `void` You can associate styles with this name to be used when
     * the element is detached from the application. For example, when an `ngIf` evaluates
     * to false, the state of the associated element is void.
     *  - `*` (asterisk) Indicates the default state. You can associate styles with this name
     * to be used as the fallback when the state that is being animated is not declared
     * within the trigger.
     *
     * @param {?} styles A set of CSS styles associated with this state, created using the
     * `style()` function.
     * This set of styles persists on the element once the state has been reached.
     * @param {?=} options Parameters that can be passed to the state when it is invoked.
     * 0 or more key-value pairs.
     * @return {?} An object that encapsulates the new state data.
     *
     */


    function state(name, styles, options) {
      return {
        type: 0
        /* State */
        ,
        name: name,
        styles: styles,
        options: options
      };
    }
    /**
     * Defines a set of animation styles, associating each style with an optional `offset` value.
     *
     * \@usageNotes
     * Use with the `animate()` call. Instead of applying animations
     * from the current state
     * to the destination state, keyframes describe how each style entry is applied and at what point
     * within the animation arc.
     * Compare [CSS Keyframe Animations](https://www.w3schools.com/css/css3_animations.asp).
     *
     * ### Usage
     *
     * In the following example, the offset values describe
     * when each `backgroundColor` value is applied. The color is red at the start, and changes to
     * blue when 20% of the total time has elapsed.
     *
     * ```typescript
     * // the provided offset values
     * animate("5s", keyframes([
     *   style({ backgroundColor: "red", offset: 0 }),
     *   style({ backgroundColor: "blue", offset: 0.2 }),
     *   style({ backgroundColor: "orange", offset: 0.3 }),
     *   style({ backgroundColor: "black", offset: 1 })
     * ]))
     * ```
     *
     * If there are no `offset` values specified in the style entries, the offsets
     * are calculated automatically.
     *
     * ```typescript
     * animate("5s", keyframes([
     *   style({ backgroundColor: "red" }) // offset = 0
     *   style({ backgroundColor: "blue" }) // offset = 0.33
     *   style({ backgroundColor: "orange" }) // offset = 0.66
     *   style({ backgroundColor: "black" }) // offset = 1
     * ]))
     * ```
     * \@publicApi
     * @param {?} steps A set of animation styles with optional offset data.
     * The optional `offset` value for a style specifies a percentage of the total animation
     * time at which that style is applied.
     * @return {?} An object that encapsulates the keyframes data.
     *
     */


    function keyframes(steps) {
      return {
        type: 5
        /* Keyframes */
        ,
        steps: steps
      };
    }
    /**
     * Declares an animation transition as a sequence of animation steps to run when a given
     * condition is satisfied. The condition is a Boolean expression or function that compares
     * the previous and current animation states, and returns true if this transition should occur.
     * When the state criteria of a defined transition are met, the associated animation is
     * triggered.
     *
     * \@usageNotes
     * The template associated with a component binds an animation trigger to an element.
     *
     * ```HTML
     * <!-- somewhere inside of my-component-tpl.html -->
     * <div [\@myAnimationTrigger]="myStatusExp">...</div>
     * ```
     *
     * All transitions are defined within an animation trigger,
     * along with named states that the transitions change to and from.
     *
     * ```typescript
     * trigger("myAnimationTrigger", [
     *  // define states
     *  state("on", style({ background: "green" })),
     *  state("off", style({ background: "grey" })),
     *  ...]
     * ```
     *
     * Note that when you call the `sequence()` function within a `{\@link animations/group group()}`
     * or a `transition()` call, execution does not continue to the next instruction
     * until each of the inner animation steps have completed.
     *
     * ### Syntax examples
     *
     * The following examples define transitions between the two defined states (and default states),
     * using various options:
     *
     * ```typescript
     * // Transition occurs when the state value
     * // bound to "myAnimationTrigger" changes from "on" to "off"
     * transition("on => off", animate(500))
     * // Run the same animation for both directions
     * transition("on <=> off", animate(500))
     * // Define multiple state-change pairs separated by commas
     * transition("on => off, off => void", animate(500))
     * ```
     *
     * ### Special values for state-change expressions
     *
     * - Catch-all state change for when an element is inserted into the page and the
     * destination state is unknown:
     *
     * ```typescript
     * transition("void => *", [
     *  style({ opacity: 0 }),
     *  animate(500)
     *  ])
     * ```
     *
     * - Capture a state change between any states:
     *
     *  `transition("* => *", animate("1s 0s"))`
     *
     * - Entry and exit transitions:
     *
     * ```typescript
     * transition(":enter", [
     *   style({ opacity: 0 }),
     *   animate(500, style({ opacity: 1 }))
     *   ]),
     * transition(":leave", [
     *   animate(500, style({ opacity: 0 }))
     *   ])
     * ```
     *
     * - Use `:increment` and `:decrement` to initiate transitions:
     *
     * ```typescript
     * transition(":increment", group([
     *  query(':enter', [
     *     style({ left: '100%' }),
     *     animate('0.5s ease-out', style('*'))
     *   ]),
     *  query(':leave', [
     *     animate('0.5s ease-out', style({ left: '-100%' }))
     *  ])
     * ]))
     *
     * transition(":decrement", group([
     *  query(':enter', [
     *     style({ left: '100%' }),
     *     animate('0.5s ease-out', style('*'))
     *   ]),
     *  query(':leave', [
     *     animate('0.5s ease-out', style({ left: '-100%' }))
     *  ])
     * ]))
     * ```
     *
     * ### State-change functions
     *
     * Here is an example of a `fromState` specified as a state-change function that invokes an
     * animation when true:
     *
     * ```typescript
     * transition((fromState, toState) =>
     *  {
     *   return fromState == "off" && toState == "on";
     *  },
     *  animate("1s 0s"))
     * ```
     *
     * ### Animating to the final state
     *
     * If the final step in a transition is a call to `animate()` that uses a timing value
     * with no style data, that step is automatically considered the final animation arc,
     * for the element to reach the final state. Angular automatically adds or removes
     * CSS styles to ensure that the element is in the correct final state.
     *
     * The following example defines a transition that starts by hiding the element,
     * then makes sure that it animates properly to whatever state is currently active for trigger:
     *
     * ```typescript
     * transition("void => *", [
     *   style({ opacity: 0 }),
     *   animate(500)
     *  ])
     * ```
     * ### Boolean value matching
     * If a trigger binding value is a Boolean, it can be matched using a transition expression
     * that compares true and false or 1 and 0. For example:
     *
     * ```
     * // in the template
     * <div [\@openClose]="open ? true : false">...</div>
     * // in the component metadata
     * trigger('openClose', [
     *   state('true', style({ height: '*' })),
     *   state('false', style({ height: '0px' })),
     *   transition('false <=> true', animate(500))
     * ])
     * ```
     *
     * \@publicApi
     *
     * @param {?} stateChangeExpr A Boolean expression or function that compares the previous and current
     * animation states, and returns true if this transition should occur. Note that  "true" and "false"
     * match 1 and 0, respectively. An expression is evaluated each time a state change occurs in the
     * animation trigger element.
     * The animation steps run when the expression evaluates to true.
     *
     * - A state-change string takes the form "state1 => state2", where each side is a defined animation
     * state, or an asterix (*) to refer to a dynamic start or end state.
     *   - The expression string can contain multiple comma-separated statements;
     * for example "state1 => state2, state3 => state4".
     *   - Special values `:enter` and `:leave` initiate a transition on the entry and exit states,
     * equivalent to  "void => *"  and "* => void".
     *   - Special values `:increment` and `:decrement` initiate a transition when a numeric value has
     * increased or decreased in value.
     * - A function is executed each time a state change occurs in the animation trigger element.
     * The animation steps run when the function returns true.
     *
     * @param {?} steps One or more animation objects, as returned by the `animate()` or
     * `sequence()` function, that form a transformation from one state to another.
     * A sequence is used by default when you pass an array.
     * @param {?=} options An options object that can contain a delay value for the start of the animation,
     * and additional developer-defined parameters. Provided values for additional parameters are used
     * as defaults, and override values can be passed to the caller on invocation.
     * @return {?} An object that encapsulates the transition data.
     *
     */


    function transition(stateChangeExpr, steps) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      return {
        type: 1
        /* Transition */
        ,
        expr: stateChangeExpr,
        animation: steps,
        options: options
      };
    }
    /**
     * Produces a reusable animation that can be invoked in another animation or sequence,
     * by calling the `useAnimation()` function.
     *
     * \@usageNotes
     * The following example defines a reusable animation, providing some default parameter
     * values.
     *
     * ```typescript
     * var fadeAnimation = animation([
     *   style({ opacity: '{{ start }}' }),
     *   animate('{{ time }}',
     *   style({ opacity: '{{ end }}'}))
     *   ],
     *   { params: { time: '1000ms', start: 0, end: 1 }});
     * ```
     *
     * The following invokes the defined animation with a call to `useAnimation()`,
     * passing in override parameter values.
     *
     * ```js
     * useAnimation(fadeAnimation, {
     *   params: {
     *     time: '2s',
     *     start: 1,
     *     end: 0
     *   }
     * })
     * ```
     *
     * If any of the passed-in parameter values are missing from this call,
     * the default values are used. If one or more parameter values are missing before a step is
     * animated, `useAnimation()` throws an error.
     *
     * \@publicApi
     * @param {?} steps One or more animation objects, as returned by the `animate()`
     * or `sequence()` function, that form a transformation from one state to another.
     * A sequence is used by default when you pass an array.
     * @param {?=} options An options object that can contain a delay value for the start of the
     * animation, and additional developer-defined parameters.
     * Provided values for additional parameters are used as defaults,
     * and override values can be passed to the caller on invocation.
     * @return {?} An object that encapsulates the animation data.
     *
     */


    function animation(steps) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return {
        type: 8
        /* Reference */
        ,
        animation: steps,
        options: options
      };
    }
    /**
     * Executes a queried inner animation element within an animation sequence.
     *
     * \@usageNotes
     * Each time an animation is triggered in Angular, the parent animation
     * has priority and any child animations are blocked. In order
     * for a child animation to run, the parent animation must query each of the elements
     * containing child animations, and run them using this function.
     *
     * Note that this feature is designed to be used with `query()` and it will only work
     * with animations that are assigned using the Angular animation library. CSS keyframes
     * and transitions are not handled by this API.
     *
     * \@publicApi
     * @param {?=} options An options object that can contain a delay value for the start of the
     * animation, and additional override values for developer-defined parameters.
     * @return {?} An object that encapsulates the child animation data.
     *
     */


    function animateChild() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return {
        type: 9
        /* AnimateChild */
        ,
        options: options
      };
    }
    /**
     * Starts a reusable animation that is created using the `animation()` function.
     *
     * \@publicApi
     * @param {?} animation The reusable animation to start.
     * @param {?=} options An options object that can contain a delay value for the start of
     * the animation, and additional override values for developer-defined parameters.
     * @return {?} An object that contains the animation parameters.
     *
     */


    function useAnimation(animation) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return {
        type: 10
        /* AnimateRef */
        ,
        animation: animation,
        options: options
      };
    }
    /**
     * Finds one or more inner elements within the current element that is
     * being animated within a sequence. Use with `animate()`.
     *
     * \@usageNotes
     * Tokens can be merged into a combined query selector string. For example:
     *
     * ```typescript
     *  query(':self, .record:enter, .record:leave, \@subTrigger', [...])
     * ```
     *
     * The `query()` function collects multiple elements and works internally by using
     * `element.querySelectorAll`. Use the `limit` field of an options object to limit
     * the total number of items to be collected. For example:
     *
     * ```js
     * query('div', [
     *   animate(...),
     *   animate(...)
     * ], { limit: 1 })
     * ```
     *
     * By default, throws an error when zero items are found. Set the
     * `optional` flag to ignore this error. For example:
     *
     * ```js
     * query('.some-element-that-may-not-be-there', [
     *   animate(...),
     *   animate(...)
     * ], { optional: true })
     * ```
     *
     * ### Usage Example
     *
     * The following example queries for inner elements and animates them
     * individually using `animate()`.
     *
     * ```typescript
     * \@Component({
     *   selector: 'inner',
     *   template: `
     *     <div [\@queryAnimation]="exp">
     *       <h1>Title</h1>
     *       <div class="content">
     *         Blah blah blah
     *       </div>
     *     </div>
     *   `,
     *   animations: [
     *    trigger('queryAnimation', [
     *      transition('* => goAnimate', [
     *        // hide the inner elements
     *        query('h1', style({ opacity: 0 })),
     *        query('.content', style({ opacity: 0 })),
     *
     *        // animate the inner elements in, one by one
     *        query('h1', animate(1000, style({ opacity: 1 }))),
     *        query('.content', animate(1000, style({ opacity: 1 }))),
     *      ])
     *    ])
     *  ]
     * })
     * class Cmp {
     *   exp = '';
     *
     *   goAnimate() {
     *     this.exp = 'goAnimate';
     *   }
     * }
     * ```
     *
     * \@publicApi
     * @param {?} selector The element to query, or a set of elements that contain Angular-specific
     * characteristics, specified with one or more of the following tokens.
     *  - `query(":enter")` or `query(":leave")` : Query for newly inserted/removed elements.
     *  - `query(":animating")` : Query all currently animating elements.
     *  - `query("\@triggerName")` : Query elements that contain an animation trigger.
     *  - `query("\@*")` : Query all elements that contain an animation triggers.
     *  - `query(":self")` : Include the current element into the animation sequence.
     *
     * @param {?} animation One or more animation steps to apply to the queried element or elements.
     * An array is treated as an animation sequence.
     * @param {?=} options An options object. Use the 'limit' field to limit the total number of
     * items to collect.
     * @return {?} An object that encapsulates the query data.
     *
     */


    function query(selector, animation) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      return {
        type: 11
        /* Query */
        ,
        selector: selector,
        animation: animation,
        options: options
      };
    }
    /**
     * Use within an animation `query()` call to issue a timing gap after
     * each queried item is animated.
     *
     * \@usageNotes
     * In the following example, a container element wraps a list of items stamped out
     * by an `ngFor`. The container element contains an animation trigger that will later be set
     * to query for each of the inner items.
     *
     * Each time items are added, the opacity fade-in animation runs,
     * and each removed item is faded out.
     * When either of these animations occur, the stagger effect is
     * applied after each item's animation is started.
     *
     * ```html
     * <!-- list.component.html -->
     * <button (click)="toggle()">Show / Hide Items</button>
     * <hr />
     * <div [\@listAnimation]="items.length">
     *   <div *ngFor="let item of items">
     *     {{ item }}
     *   </div>
     * </div>
     * ```
     *
     * Here is the component code:
     *
     * ```typescript
     * import {trigger, transition, style, animate, query, stagger} from '\@angular/animations';
     * \@Component({
     *   templateUrl: 'list.component.html',
     *   animations: [
     *     trigger('listAnimation', [
     *     ...
     *     ])
     *   ]
     * })
     * class ListComponent {
     *   items = [];
     *
     *   showItems() {
     *     this.items = [0,1,2,3,4];
     *   }
     *
     *   hideItems() {
     *     this.items = [];
     *   }
     *
     *   toggle() {
     *     this.items.length ? this.hideItems() : this.showItems();
     *    }
     *  }
     * ```
     *
     * Here is the animation trigger code:
     *
     * ```typescript
     * trigger('listAnimation', [
     *   transition('* => *', [ // each time the binding value changes
     *     query(':leave', [
     *       stagger(100, [
     *         animate('0.5s', style({ opacity: 0 }))
     *       ])
     *     ]),
     *     query(':enter', [
     *       style({ opacity: 0 }),
     *       stagger(100, [
     *         animate('0.5s', style({ opacity: 1 }))
     *       ])
     *     ])
     *   ])
     * ])
     * ```
     *
     * \@publicApi
     * @param {?} timings A delay value.
     * @param {?} animation One ore more animation steps.
     * @return {?} An object that encapsulates the stagger data.
     *
     */


    function stagger(timings, animation) {
      return {
        type: 12
        /* Stagger */
        ,
        timings: timings,
        animation: animation
      };
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/animations/src/util.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     * @param {?} cb
     * @return {?}
     */


    function scheduleMicroTask(cb) {
      Promise.resolve(null).then(cb);
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/animations/src/players/animation_player.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Provides programmatic control of a reusable animation sequence,
     * built using the `build()` method of `AnimationBuilder`. The `build()` method
     * returns a factory, whose `create()` method instantiates and initializes this interface.
     *
     * @see `AnimationBuilder`
     * @see `AnimationFactory`
     * @see `animate()`
     *
     * \@publicApi
     * @record
     */


    function AnimationPlayer() {}

    if (false) {}
    /**
     * An empty programmatic controller for reusable animations.
     * Used internally when animations are disabled, to avoid
     * checking for the null case when an animation player is expected.
     *
     * @see `animate()`
     * @see `AnimationPlayer`
     * @see `GroupPlayer`
     *
     * \@publicApi
     */


    var NoopAnimationPlayer =
    /*#__PURE__*/
    function () {
      /**
       * @param {?=} duration
       * @param {?=} delay
       */
      function NoopAnimationPlayer() {
        var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, NoopAnimationPlayer);

        this._onDoneFns = [];
        this._onStartFns = [];
        this._onDestroyFns = [];
        this._started = false;
        this._destroyed = false;
        this._finished = false;
        this.parentPlayer = null;
        this.totalTime = duration + delay;
      }
      /**
       * @private
       * @return {?}
       */


      _createClass(NoopAnimationPlayer, [{
        key: "_onFinish",
        value: function _onFinish() {
          if (!this._finished) {
            this._finished = true;

            this._onDoneFns.forEach(
            /**
            * @param {?} fn
            * @return {?}
            */
            function (fn) {
              return fn();
            });

            this._onDoneFns = [];
          }
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "onStart",
        value: function onStart(fn) {
          this._onStartFns.push(fn);
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "onDone",
        value: function onDone(fn) {
          this._onDoneFns.push(fn);
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "onDestroy",
        value: function onDestroy(fn) {
          this._onDestroyFns.push(fn);
        }
        /**
         * @return {?}
         */

      }, {
        key: "hasStarted",
        value: function hasStarted() {
          return this._started;
        }
        /**
         * @return {?}
         */

      }, {
        key: "init",
        value: function init() {}
        /**
         * @return {?}
         */

      }, {
        key: "play",
        value: function play() {
          if (!this.hasStarted()) {
            this._onStart();

            this.triggerMicrotask();
          }

          this._started = true;
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "triggerMicrotask",
        value: function triggerMicrotask() {
          var _this = this;

          scheduleMicroTask(
          /**
          * @return {?}
          */
          function () {
            return _this._onFinish();
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_onStart",
        value: function _onStart() {
          this._onStartFns.forEach(
          /**
          * @param {?} fn
          * @return {?}
          */
          function (fn) {
            return fn();
          });

          this._onStartFns = [];
        }
        /**
         * @return {?}
         */

      }, {
        key: "pause",
        value: function pause() {}
        /**
         * @return {?}
         */

      }, {
        key: "restart",
        value: function restart() {}
        /**
         * @return {?}
         */

      }, {
        key: "finish",
        value: function finish() {
          this._onFinish();
        }
        /**
         * @return {?}
         */

      }, {
        key: "destroy",
        value: function destroy() {
          if (!this._destroyed) {
            this._destroyed = true;

            if (!this.hasStarted()) {
              this._onStart();
            }

            this.finish();

            this._onDestroyFns.forEach(
            /**
            * @param {?} fn
            * @return {?}
            */
            function (fn) {
              return fn();
            });

            this._onDestroyFns = [];
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset() {}
        /**
         * @param {?} position
         * @return {?}
         */

      }, {
        key: "setPosition",
        value: function setPosition(position) {}
        /**
         * @return {?}
         */

      }, {
        key: "getPosition",
        value: function getPosition() {
          return 0;
        }
        /**
         * \@internal
         * @param {?} phaseName
         * @return {?}
         */

      }, {
        key: "triggerCallback",
        value: function triggerCallback(phaseName) {
          /** @type {?} */
          var methods = phaseName == 'start' ? this._onStartFns : this._onDoneFns;
          methods.forEach(
          /**
          * @param {?} fn
          * @return {?}
          */
          function (fn) {
            return fn();
          });
          methods.length = 0;
        }
      }]);

      return NoopAnimationPlayer;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/animations/src/players/animation_group_player.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * A programmatic controller for a group of reusable animations.
     * Used internally to control animations.
     *
     * @see `AnimationPlayer`
     * @see `{\@link animations/group group()}`
     *
     */


    var AnimationGroupPlayer =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _players
       */
      function AnimationGroupPlayer(_players) {
        var _this2 = this;

        _classCallCheck(this, AnimationGroupPlayer);

        this._onDoneFns = [];
        this._onStartFns = [];
        this._finished = false;
        this._started = false;
        this._destroyed = false;
        this._onDestroyFns = [];
        this.parentPlayer = null;
        this.totalTime = 0;
        this.players = _players;
        /** @type {?} */

        var doneCount = 0;
        /** @type {?} */

        var destroyCount = 0;
        /** @type {?} */

        var startCount = 0;
        /** @type {?} */

        var total = this.players.length;

        if (total == 0) {
          scheduleMicroTask(
          /**
          * @return {?}
          */
          function () {
            return _this2._onFinish();
          });
        } else {
          this.players.forEach(
          /**
          * @param {?} player
          * @return {?}
          */
          function (player) {
            player.onDone(
            /**
            * @return {?}
            */
            function () {
              if (++doneCount == total) {
                _this2._onFinish();
              }
            });
            player.onDestroy(
            /**
            * @return {?}
            */
            function () {
              if (++destroyCount == total) {
                _this2._onDestroy();
              }
            });
            player.onStart(
            /**
            * @return {?}
            */
            function () {
              if (++startCount == total) {
                _this2._onStart();
              }
            });
          });
        }

        this.totalTime = this.players.reduce(
        /**
        * @param {?} time
        * @param {?} player
        * @return {?}
        */
        function (time, player) {
          return Math.max(time, player.totalTime);
        }, 0);
      }
      /**
       * @private
       * @return {?}
       */


      _createClass(AnimationGroupPlayer, [{
        key: "_onFinish",
        value: function _onFinish() {
          if (!this._finished) {
            this._finished = true;

            this._onDoneFns.forEach(
            /**
            * @param {?} fn
            * @return {?}
            */
            function (fn) {
              return fn();
            });

            this._onDoneFns = [];
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "init",
        value: function init() {
          this.players.forEach(
          /**
          * @param {?} player
          * @return {?}
          */
          function (player) {
            return player.init();
          });
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "onStart",
        value: function onStart(fn) {
          this._onStartFns.push(fn);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_onStart",
        value: function _onStart() {
          if (!this.hasStarted()) {
            this._started = true;

            this._onStartFns.forEach(
            /**
            * @param {?} fn
            * @return {?}
            */
            function (fn) {
              return fn();
            });

            this._onStartFns = [];
          }
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "onDone",
        value: function onDone(fn) {
          this._onDoneFns.push(fn);
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "onDestroy",
        value: function onDestroy(fn) {
          this._onDestroyFns.push(fn);
        }
        /**
         * @return {?}
         */

      }, {
        key: "hasStarted",
        value: function hasStarted() {
          return this._started;
        }
        /**
         * @return {?}
         */

      }, {
        key: "play",
        value: function play() {
          if (!this.parentPlayer) {
            this.init();
          }

          this._onStart();

          this.players.forEach(
          /**
          * @param {?} player
          * @return {?}
          */
          function (player) {
            return player.play();
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "pause",
        value: function pause() {
          this.players.forEach(
          /**
          * @param {?} player
          * @return {?}
          */
          function (player) {
            return player.pause();
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "restart",
        value: function restart() {
          this.players.forEach(
          /**
          * @param {?} player
          * @return {?}
          */
          function (player) {
            return player.restart();
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "finish",
        value: function finish() {
          this._onFinish();

          this.players.forEach(
          /**
          * @param {?} player
          * @return {?}
          */
          function (player) {
            return player.finish();
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "destroy",
        value: function destroy() {
          this._onDestroy();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_onDestroy",
        value: function _onDestroy() {
          if (!this._destroyed) {
            this._destroyed = true;

            this._onFinish();

            this.players.forEach(
            /**
            * @param {?} player
            * @return {?}
            */
            function (player) {
              return player.destroy();
            });

            this._onDestroyFns.forEach(
            /**
            * @param {?} fn
            * @return {?}
            */
            function (fn) {
              return fn();
            });

            this._onDestroyFns = [];
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset() {
          this.players.forEach(
          /**
          * @param {?} player
          * @return {?}
          */
          function (player) {
            return player.reset();
          });
          this._destroyed = false;
          this._finished = false;
          this._started = false;
        }
        /**
         * @param {?} p
         * @return {?}
         */

      }, {
        key: "setPosition",
        value: function setPosition(p) {
          /** @type {?} */
          var timeAtPosition = p * this.totalTime;
          this.players.forEach(
          /**
          * @param {?} player
          * @return {?}
          */
          function (player) {
            /** @type {?} */
            var position = player.totalTime ? Math.min(1, timeAtPosition / player.totalTime) : 1;
            player.setPosition(position);
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "getPosition",
        value: function getPosition() {
          /** @type {?} */
          var min = 0;
          this.players.forEach(
          /**
          * @param {?} player
          * @return {?}
          */
          function (player) {
            /** @type {?} */
            var p = player.getPosition();
            min = Math.min(p, min);
          });
          return min;
        }
        /**
         * @return {?}
         */

      }, {
        key: "beforeDestroy",
        value: function beforeDestroy() {
          this.players.forEach(
          /**
          * @param {?} player
          * @return {?}
          */
          function (player) {
            if (player.beforeDestroy) {
              player.beforeDestroy();
            }
          });
        }
        /**
         * \@internal
         * @param {?} phaseName
         * @return {?}
         */

      }, {
        key: "triggerCallback",
        value: function triggerCallback(phaseName) {
          /** @type {?} */
          var methods = phaseName == 'start' ? this._onStartFns : this._onDoneFns;
          methods.forEach(
          /**
          * @param {?} fn
          * @return {?}
          */
          function (fn) {
            return fn();
          });
          methods.length = 0;
        }
      }]);

      return AnimationGroupPlayer;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/animations/src/private_export.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var ɵPRE_STYLE = '!';
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/animations/src/animations.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: packages/animations/public_api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: packages/animations/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=animations.js.map

    /***/
  },

  /***/
  "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js ***!
    \*******************************************************************/

  /*! exports provided: ConfirmEventType, ConfirmationService, ContextMenuService, FilterMatchMode, FilterOperator, FilterService, Footer, Header, MessageService, PrimeIcons, PrimeNGConfig, PrimeTemplate, SharedModule, TranslationKeys, TreeDragDropService */

  /***/
  function node_modulesPrimeng__ivy_ngcc__Fesm2015PrimengApiJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmEventType", function () {
      return ConfirmEventType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmationService", function () {
      return ConfirmationService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContextMenuService", function () {
      return ContextMenuService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterMatchMode", function () {
      return FilterMatchMode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterOperator", function () {
      return FilterOperator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterService", function () {
      return FilterService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Footer", function () {
      return Footer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Header", function () {
      return Header;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageService", function () {
      return MessageService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrimeIcons", function () {
      return PrimeIcons;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrimeNGConfig", function () {
      return PrimeNGConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrimeTemplate", function () {
      return PrimeTemplate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TranslationKeys", function () {
      return TranslationKeys;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TreeDragDropService", function () {
      return TreeDragDropService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! primeng/utils */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-utils.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["*"];

    var FilterMatchMode = function FilterMatchMode() {
      _classCallCheck(this, FilterMatchMode);
    };

    FilterMatchMode.STARTS_WITH = 'startsWith';
    FilterMatchMode.CONTAINS = 'contains';
    FilterMatchMode.NOT_CONTAINS = 'notContains';
    FilterMatchMode.ENDS_WITH = 'endsWith';
    FilterMatchMode.EQUALS = 'equals';
    FilterMatchMode.NOT_EQUALS = 'notEquals';
    FilterMatchMode.IN = 'in';
    FilterMatchMode.LESS_THAN = 'lt';
    FilterMatchMode.LESS_THAN_OR_EQUAL_TO = 'lte';
    FilterMatchMode.GREATER_THAN = 'gt';
    FilterMatchMode.GREATER_THAN_OR_EQUAL_TO = 'gte';
    FilterMatchMode.BETWEEN = 'between';
    FilterMatchMode.IS = 'is';
    FilterMatchMode.IS_NOT = 'isNot';
    FilterMatchMode.BEFORE = 'before';
    FilterMatchMode.AFTER = 'after';
    FilterMatchMode.DATE_IS = 'dateIs';
    FilterMatchMode.DATE_IS_NOT = 'dateIsNot';
    FilterMatchMode.DATE_BEFORE = 'dateBefore';
    FilterMatchMode.DATE_AFTER = 'dateAfter';

    var PrimeNGConfig =
    /*#__PURE__*/
    function () {
      function PrimeNGConfig() {
        _classCallCheck(this, PrimeNGConfig);

        this.ripple = false;
        this.filterMatchModeOptions = {
          text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
          numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
          date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
        };
        this.translation = {
          startsWith: 'Starts with',
          contains: 'Contains',
          notContains: 'Not contains',
          endsWith: 'Ends with',
          equals: 'Equals',
          notEquals: 'Not equals',
          noFilter: 'No Filter',
          lt: 'Less than',
          lte: 'Less than or equal to',
          gt: 'Greater than',
          gte: 'Greater than or equal to',
          is: 'Is',
          isNot: 'Is not',
          before: 'Before',
          after: 'After',
          dateIs: 'Date is',
          dateIsNot: 'Date is not',
          dateBefore: 'Date is before',
          dateAfter: 'Date is after',
          clear: 'Clear',
          apply: 'Apply',
          matchAll: 'Match All',
          matchAny: 'Match Any',
          addRule: 'Add Rule',
          removeRule: 'Remove Rule',
          accept: 'Yes',
          reject: 'No',
          choose: 'Choose',
          upload: 'Upload',
          cancel: 'Cancel',
          dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
          monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          today: 'Today',
          weekHeader: 'Wk',
          weak: 'Weak',
          medium: 'Medium',
          strong: 'Strong',
          passwordPrompt: 'Enter a password'
        };
        this.translationSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.translationObserver = this.translationSource.asObservable();
      }

      _createClass(PrimeNGConfig, [{
        key: "getTranslation",
        value: function getTranslation(key) {
          return this.translation[key];
        }
      }, {
        key: "setTranslation",
        value: function setTranslation(value) {
          this.translation = Object.assign(Object.assign({}, this.translation), value);
          this.translationSource.next(this.translation);
        }
      }]);

      return PrimeNGConfig;
    }();

    PrimeNGConfig.ɵfac = function PrimeNGConfig_Factory(t) {
      return new (t || PrimeNGConfig)();
    };

    PrimeNGConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function PrimeNGConfig_Factory() {
        return new PrimeNGConfig();
      },
      token: PrimeNGConfig,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrimeNGConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();

    var TranslationKeys = function TranslationKeys() {
      _classCallCheck(this, TranslationKeys);
    };

    TranslationKeys.STARTS_WITH = 'startsWith';
    TranslationKeys.CONTAINS = 'contains';
    TranslationKeys.NOT_CONTAINS = 'notContains';
    TranslationKeys.ENDS_WITH = 'endsWith';
    TranslationKeys.EQUALS = 'equals';
    TranslationKeys.NOT_EQUALS = 'notEquals';
    TranslationKeys.NO_FILTER = 'noFilter';
    TranslationKeys.LT = 'lt';
    TranslationKeys.LTE = 'lte';
    TranslationKeys.GT = 'gt';
    TranslationKeys.GTE = 'gte';
    TranslationKeys.IS = 'is';
    TranslationKeys.IS_NOT = 'isNot';
    TranslationKeys.BEFORE = 'before';
    TranslationKeys.AFTER = 'after';
    TranslationKeys.CLEAR = 'clear';
    TranslationKeys.APPLY = 'apply';
    TranslationKeys.MATCH_ALL = 'matchAll';
    TranslationKeys.MATCH_ANY = 'matchAny';
    TranslationKeys.ADD_RULE = 'addRule';
    TranslationKeys.REMOVE_RULE = 'removeRule';
    TranslationKeys.ACCEPT = 'accept';
    TranslationKeys.REJECT = 'reject';
    TranslationKeys.CHOOSE = 'choose';
    TranslationKeys.UPLOAD = 'upload';
    TranslationKeys.CANCEL = 'cancel';
    TranslationKeys.DAY_NAMES = 'dayNames';
    TranslationKeys.DAY_NAMES_SHORT = 'dayNamesShort';
    TranslationKeys.DAY_NAMES_MIN = 'dayNamesMin';
    TranslationKeys.MONTH_NAMES = 'monthNames';
    TranslationKeys.MONTH_NAMES_SHORT = 'monthNamesShort';
    TranslationKeys.TODAY = 'today';
    TranslationKeys.WEEK_HEADER = 'weekHeader';
    TranslationKeys.WEAK = 'weak';
    TranslationKeys.MEDIUM = 'medium';
    TranslationKeys.STRONG = 'strong';
    TranslationKeys.PASSWORD_PROMPT = 'passwordPrompt';
    var ConfirmEventType;

    (function (ConfirmEventType) {
      ConfirmEventType[ConfirmEventType["ACCEPT"] = 0] = "ACCEPT";
      ConfirmEventType[ConfirmEventType["REJECT"] = 1] = "REJECT";
      ConfirmEventType[ConfirmEventType["CANCEL"] = 2] = "CANCEL";
    })(ConfirmEventType || (ConfirmEventType = {}));

    var ConfirmationService =
    /*#__PURE__*/
    function () {
      function ConfirmationService() {
        _classCallCheck(this, ConfirmationService);

        this.requireConfirmationSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.acceptConfirmationSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.requireConfirmation$ = this.requireConfirmationSource.asObservable();
        this.accept = this.acceptConfirmationSource.asObservable();
      }

      _createClass(ConfirmationService, [{
        key: "confirm",
        value: function confirm(confirmation) {
          this.requireConfirmationSource.next(confirmation);
          return this;
        }
      }, {
        key: "close",
        value: function close() {
          this.requireConfirmationSource.next(null);
          return this;
        }
      }, {
        key: "onAccept",
        value: function onAccept() {
          this.acceptConfirmationSource.next();
        }
      }]);

      return ConfirmationService;
    }();

    ConfirmationService.ɵfac = function ConfirmationService_Factory(t) {
      return new (t || ConfirmationService)();
    };

    ConfirmationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ConfirmationService,
      factory: ConfirmationService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();

    var FilterService =
    /*#__PURE__*/
    function () {
      function FilterService() {
        var _this3 = this;

        _classCallCheck(this, FilterService);

        this.filters = {
          startsWith: function startsWith(value, filter, filterLocale) {
            if (filter === undefined || filter === null || filter.trim() === '') {
              return true;
            }

            if (value === undefined || value === null) {
              return false;
            }

            var filterValue = primeng_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
            var stringValue = primeng_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
            return stringValue.slice(0, filterValue.length) === filterValue;
          },
          contains: function contains(value, filter, filterLocale) {
            if (filter === undefined || filter === null || typeof filter === 'string' && filter.trim() === '') {
              return true;
            }

            if (value === undefined || value === null) {
              return false;
            }

            var filterValue = primeng_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
            var stringValue = primeng_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
            return stringValue.indexOf(filterValue) !== -1;
          },
          notContains: function notContains(value, filter, filterLocale) {
            if (filter === undefined || filter === null || typeof filter === 'string' && filter.trim() === '') {
              return true;
            }

            if (value === undefined || value === null) {
              return false;
            }

            var filterValue = primeng_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
            var stringValue = primeng_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
            return stringValue.indexOf(filterValue) === -1;
          },
          endsWith: function endsWith(value, filter, filterLocale) {
            if (filter === undefined || filter === null || filter.trim() === '') {
              return true;
            }

            if (value === undefined || value === null) {
              return false;
            }

            var filterValue = primeng_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
            var stringValue = primeng_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
            return stringValue.indexOf(filterValue, stringValue.length - filterValue.length) !== -1;
          },
          equals: function equals(value, filter, filterLocale) {
            if (filter === undefined || filter === null || typeof filter === 'string' && filter.trim() === '') {
              return true;
            }

            if (value === undefined || value === null) {
              return false;
            }

            if (value.getTime && filter.getTime) return value.getTime() === filter.getTime();else return primeng_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].removeAccents(value.toString()).toLocaleLowerCase(filterLocale) == primeng_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
          },
          notEquals: function notEquals(value, filter, filterLocale) {
            if (filter === undefined || filter === null || typeof filter === 'string' && filter.trim() === '') {
              return false;
            }

            if (value === undefined || value === null) {
              return true;
            }

            if (value.getTime && filter.getTime) return value.getTime() !== filter.getTime();else return primeng_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].removeAccents(value.toString()).toLocaleLowerCase(filterLocale) != primeng_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
          },
          "in": function _in(value, filter) {
            if (filter === undefined || filter === null || filter.length === 0) {
              return true;
            }

            for (var i = 0; i < filter.length; i++) {
              if (primeng_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].equals(value, filter[i])) {
                return true;
              }
            }

            return false;
          },
          between: function between(value, filter) {
            if (filter == null || filter[0] == null || filter[1] == null) {
              return true;
            }

            if (value === undefined || value === null) {
              return false;
            }

            if (value.getTime) return filter[0].getTime() <= value.getTime() && value.getTime() <= filter[1].getTime();else return filter[0] <= value && value <= filter[1];
          },
          lt: function lt(value, filter, filterLocale) {
            if (filter === undefined || filter === null) {
              return true;
            }

            if (value === undefined || value === null) {
              return false;
            }

            if (value.getTime && filter.getTime) return value.getTime() < filter.getTime();else return value < filter;
          },
          lte: function lte(value, filter, filterLocale) {
            if (filter === undefined || filter === null) {
              return true;
            }

            if (value === undefined || value === null) {
              return false;
            }

            if (value.getTime && filter.getTime) return value.getTime() <= filter.getTime();else return value <= filter;
          },
          gt: function gt(value, filter, filterLocale) {
            if (filter === undefined || filter === null) {
              return true;
            }

            if (value === undefined || value === null) {
              return false;
            }

            if (value.getTime && filter.getTime) return value.getTime() > filter.getTime();else return value > filter;
          },
          gte: function gte(value, filter, filterLocale) {
            if (filter === undefined || filter === null) {
              return true;
            }

            if (value === undefined || value === null) {
              return false;
            }

            if (value.getTime && filter.getTime) return value.getTime() >= filter.getTime();else return value >= filter;
          },
          is: function is(value, filter, filterLocale) {
            return _this3.filters.equals(value, filter, filterLocale);
          },
          isNot: function isNot(value, filter, filterLocale) {
            return _this3.filters.notEquals(value, filter, filterLocale);
          },
          before: function before(value, filter, filterLocale) {
            return _this3.filters.lt(value, filter, filterLocale);
          },
          after: function after(value, filter, filterLocale) {
            return _this3.filters.gt(value, filter, filterLocale);
          },
          dateIs: function dateIs(value, filter) {
            if (filter === undefined || filter === null) {
              return true;
            }

            if (value === undefined || value === null) {
              return false;
            }

            return value.toDateString() === filter.toDateString();
          },
          dateIsNot: function dateIsNot(value, filter) {
            if (filter === undefined || filter === null) {
              return true;
            }

            if (value === undefined || value === null) {
              return false;
            }

            return value.toDateString() !== filter.toDateString();
          },
          dateBefore: function dateBefore(value, filter) {
            if (filter === undefined || filter === null) {
              return true;
            }

            if (value === undefined || value === null) {
              return false;
            }

            return value.getTime() < filter.getTime();
          },
          dateAfter: function dateAfter(value, filter) {
            if (filter === undefined || filter === null) {
              return true;
            }

            if (value === undefined || value === null) {
              return false;
            }

            return value.getTime() > filter.getTime();
          }
        };
      }

      _createClass(FilterService, [{
        key: "filter",
        value: function filter(value, fields, filterValue, filterMatchMode, filterLocale) {
          var filteredItems = [];

          if (value) {
            var _iterator = _createForOfIteratorHelper(value),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var item = _step.value;

                var _iterator2 = _createForOfIteratorHelper(fields),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var field = _step2.value;
                    var fieldValue = primeng_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].resolveFieldData(item, field);

                    if (this.filters[filterMatchMode](fieldValue, filterValue, filterLocale)) {
                      filteredItems.push(item);
                      break;
                    }
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }

          return filteredItems;
        }
      }, {
        key: "register",
        value: function register(rule, fn) {
          this.filters[rule] = fn;
        }
      }]);

      return FilterService;
    }();

    FilterService.ɵfac = function FilterService_Factory(t) {
      return new (t || FilterService)();
    };

    FilterService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function FilterService_Factory() {
        return new FilterService();
      },
      token: FilterService,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();

    var ContextMenuService =
    /*#__PURE__*/
    function () {
      function ContextMenuService() {
        _classCallCheck(this, ContextMenuService);

        this.activeItemKeyChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.activeItemKeyChange$ = this.activeItemKeyChange.asObservable();
      }

      _createClass(ContextMenuService, [{
        key: "changeKey",
        value: function changeKey(key) {
          this.activeItemKey = key;
          this.activeItemKeyChange.next(this.activeItemKey);
        }
      }, {
        key: "reset",
        value: function reset() {
          this.activeItemKey = null;
          this.activeItemKeyChange.next(this.activeItemKey);
        }
      }]);

      return ContextMenuService;
    }();

    ContextMenuService.ɵfac = function ContextMenuService_Factory(t) {
      return new (t || ContextMenuService)();
    };

    ContextMenuService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ContextMenuService,
      factory: ContextMenuService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContextMenuService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();

    var MessageService =
    /*#__PURE__*/
    function () {
      function MessageService() {
        _classCallCheck(this, MessageService);

        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.clearSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.messageObserver = this.messageSource.asObservable();
        this.clearObserver = this.clearSource.asObservable();
      }

      _createClass(MessageService, [{
        key: "add",
        value: function add(message) {
          if (message) {
            this.messageSource.next(message);
          }
        }
      }, {
        key: "addAll",
        value: function addAll(messages) {
          if (messages && messages.length) {
            this.messageSource.next(messages);
          }
        }
      }, {
        key: "clear",
        value: function clear(key) {
          this.clearSource.next(key || null);
        }
      }]);

      return MessageService;
    }();

    MessageService.ɵfac = function MessageService_Factory(t) {
      return new (t || MessageService)();
    };

    MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MessageService,
      factory: MessageService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();

    var PrimeIcons = function PrimeIcons() {
      _classCallCheck(this, PrimeIcons);
    };

    PrimeIcons.ALIGN_CENTER = 'pi pi-align-center';
    PrimeIcons.ALIGN_JUSTIFY = 'pi pi-align-justify';
    PrimeIcons.ALIGN_LEFT = 'pi pi-align-left';
    PrimeIcons.ALIGN_RIGHT = 'pi pi-align-right';
    PrimeIcons.AMAZON = 'pi pi-amazon';
    PrimeIcons.ANDROID = 'pi pi-android';
    PrimeIcons.ANGLE_DOUBLE_DOWN = 'pi pi-angle-double-down';
    PrimeIcons.ANGLE_DOUBLE_LEFT = 'pi pi-angle-double-left';
    PrimeIcons.ANGLE_DOUBLE_RIGHT = 'pi pi-angle-double-right';
    PrimeIcons.ANGLE_DOUBLE_UP = 'pi pi-angle-double-up';
    PrimeIcons.ANGLE_DOWN = 'pi pi-angle-down';
    PrimeIcons.ANGLE_LEFT = 'pi pi-angle-left';
    PrimeIcons.ANGLE_RIGHT = 'pi pi-angle-right';
    PrimeIcons.ANGLE_UP = 'pi pi-angle-up';
    PrimeIcons.APPLE = 'pi pi-apple';
    PrimeIcons.ARROW_CIRCLE_DOWN = 'pi pi-arrow-circle-down';
    PrimeIcons.ARROW_CIRCLE_LEFT = 'pi pi-arrow-circle-left';
    PrimeIcons.ARROW_CIRCLE_RIGHT = 'pi pi-arrow-circle-right';
    PrimeIcons.ARROW_CIRCLE_UP = 'pi pi-arrow-circle-up';
    PrimeIcons.ARROW_DOWN = 'pi pi-arrow-down';
    PrimeIcons.ARROW_LEFT = 'pi pi-arrow-left';
    PrimeIcons.ARROW_RIGHT = 'pi pi-arrow-right';
    PrimeIcons.ARROW_UP = 'pi pi-arrow-up';
    PrimeIcons.BACKWARD = 'pi pi-backward';
    PrimeIcons.BAN = 'pi pi-ban';
    PrimeIcons.BARS = 'pi pi-bars';
    PrimeIcons.BELL = 'pi pi-bell';
    PrimeIcons.BOOK = 'pi pi-book';
    PrimeIcons.BOOKMARK = 'pi pi-bookmark';
    PrimeIcons.BRIEFCASE = 'pi pi-briefcase';
    PrimeIcons.CALENDAR_MINUS = 'pi pi-calendar-minus';
    PrimeIcons.CALENDAR_PLUS = 'pi pi-calendar-plus';
    PrimeIcons.CALENDAR_TIMES = 'pi pi-calendar-times';
    PrimeIcons.CALENDAR = 'pi pi-calendar';
    PrimeIcons.CAMERA = 'pi pi-camera';
    PrimeIcons.CARET_DOWN = 'pi pi-caret-down';
    PrimeIcons.CARET_LEFT = 'pi pi-caret-left';
    PrimeIcons.CARET_RIGHT = 'pi pi-caret-right';
    PrimeIcons.CARET_UP = 'pi pi-caret-up';
    PrimeIcons.CHART_BAR = 'pi pi-chart-bar';
    PrimeIcons.CHART_LINE = 'pi pi-chart-line';
    PrimeIcons.CHECK_CIRCLE = 'pi pi-check-circle';
    PrimeIcons.CHECK_SQUARE = 'pi pi-check-square';
    PrimeIcons.CHECK = 'pi pi-check';
    PrimeIcons.CHEVRON_CIRCLE_DOWN = 'pi pi-chevron-circle-down';
    PrimeIcons.CHEVRON_CIRCLE_LEFT = 'pi pi-chevron-circle-left';
    PrimeIcons.CHEVRON_CIRCLE_RIGHT = 'pi pi-chevron-circle-right';
    PrimeIcons.CHEVRON_CIRCLE_UP = 'pi pi-chevron-circle-up';
    PrimeIcons.CHEVRON_DOWN = 'pi pi-chevron-down';
    PrimeIcons.CHEVRON_LEFT = 'pi pi-chevron-left';
    PrimeIcons.CHEVRON_RIGHT = 'pi pi-chevron-right';
    PrimeIcons.CHEVRON_UP = 'pi pi-chevron-up';
    PrimeIcons.CLOCK = 'pi pi-clock';
    PrimeIcons.CLONE = 'pi pi-clone';
    PrimeIcons.CLOUD_DOWNLOAD = 'pi pi-cloud-download';
    PrimeIcons.CLOUD_UPLOAD = 'pi pi-cloud-upload';
    PrimeIcons.CLOUD = 'pi pi-cloud';
    PrimeIcons.COG = 'pi pi-cog';
    PrimeIcons.COMMENT = 'pi pi-comment';
    PrimeIcons.COMMENTS = 'pi pi-comments';
    PrimeIcons.COMPASS = 'pi pi-compass';
    PrimeIcons.COPY = 'pi pi-copy';
    PrimeIcons.CREDIT_CARD = 'pi pi-credit-card';
    PrimeIcons.DESKTOP = 'pi pi-desktop';
    PrimeIcons.DISCORD = 'pi pi-discord';
    PrimeIcons.DIRECTIONS_ALT = 'pi pi-directions-alt';
    PrimeIcons.DIRECTIONS = 'pi pi-directions';
    PrimeIcons.DOLLAR = 'pi pi-dollar';
    PrimeIcons.DOWNLOAD = 'pi pi-download';
    PrimeIcons.EJECT = 'pi pi-eject';
    PrimeIcons.ELLIPSIS_H = 'pi pi-ellipsis-h';
    PrimeIcons.ELLIPSIS_V = 'pi pi-ellipsis-v';
    PrimeIcons.ENVELOPE = 'pi pi-envelope';
    PrimeIcons.EXCLAMATION_CIRCLE = 'pi pi-exclamation-circle';
    PrimeIcons.EXCLAMATION_TRIANGLE = 'pi pi-exclamation-triangle ';
    PrimeIcons.EXTERNAL_LINK = 'pi pi-external-link';
    PrimeIcons.EYE_SLASH = 'pi pi-eye-slash';
    PrimeIcons.EYE = 'pi pi-eye';
    PrimeIcons.FACEBOOK = 'pi pi-facebook';
    PrimeIcons.FAST_BACKWARD = 'pi pi-fast-backward';
    PrimeIcons.FAST_FORWARD = 'pi pi-fast-forward';
    PrimeIcons.FILE_EXCEL = 'pi pi-file-excel';
    PrimeIcons.FILE_O = 'pi pi-file-o';
    PrimeIcons.FILE_PDF = 'pi pi-file-pdf';
    PrimeIcons.FILE = 'pi pi-file';
    PrimeIcons.FILTER = 'pi pi-filter';
    PrimeIcons.FILTER_SLASH = 'pi pi-filter-slash';
    PrimeIcons.FLAG = 'pi pi-flag';
    PrimeIcons.FOLDER_OPEN = 'pi pi-folder-open';
    PrimeIcons.FOLDER = 'pi pi-folder';
    PrimeIcons.FORWARD = 'pi pi-forward';
    PrimeIcons.GITHUB = 'pi pi-github';
    PrimeIcons.GLOBE = 'pi pi-globe';
    PrimeIcons.GOOGLE = 'pi pi-google';
    PrimeIcons.HEART = 'pi pi-heart';
    PrimeIcons.HOME = 'pi pi-home';
    PrimeIcons.ID_CARD = 'pi pi-id-card';
    PrimeIcons.IMAGE = 'pi pi-image';
    PrimeIcons.IMAGES = 'pi pi-images';
    PrimeIcons.INBOX = 'pi pi-inbox';
    PrimeIcons.INFO_CIRCLE = 'pi pi-info-circle';
    PrimeIcons.INFO = 'pi pi-info';
    PrimeIcons.KEY = 'pi pi-key';
    PrimeIcons.LINK = 'pi pi-link';
    PrimeIcons.LIST = 'pi pi-list';
    PrimeIcons.LOCK_OPEN = 'pi pi-lock-open';
    PrimeIcons.LOCK = 'pi pi-lock';
    PrimeIcons.MAP = 'pi pi-map';
    PrimeIcons.MAP_MARKER = 'pi pi-map-marker';
    PrimeIcons.MICROSOFT = 'pi pi-microsoft';
    PrimeIcons.MINUS_CIRCLE = 'pi pi-minus-circle';
    PrimeIcons.MINUS = 'pi pi-minus';
    PrimeIcons.MOBILE = 'pi pi-mobile';
    PrimeIcons.MONEY_BILL = 'pi pi-money-bill';
    PrimeIcons.MOON = 'pi pi-moon';
    PrimeIcons.PALETTE = 'pi pi-palette';
    PrimeIcons.PAPERCLIP = 'pi pi-paperclip';
    PrimeIcons.PAUSE = 'pi pi-pause';
    PrimeIcons.PAYPAL = 'pi pi-paypal';
    PrimeIcons.PENCIL = 'pi pi-pencil';
    PrimeIcons.PERCENTAGE = 'pi pi-percentage';
    PrimeIcons.PHONE = 'pi pi-phone';
    PrimeIcons.PLAY = 'pi pi-play';
    PrimeIcons.PLUS_CIRCLE = 'pi pi-plus-circle';
    PrimeIcons.PLUS = 'pi pi-plus';
    PrimeIcons.POWER_OFF = 'pi pi-power-off';
    PrimeIcons.PRINT = 'pi pi-print';
    PrimeIcons.QUESTION_CIRCLE = 'pi pi-question-circle';
    PrimeIcons.QUESTION = 'pi pi-question';
    PrimeIcons.RADIO_OFF = 'pi pi-radio-off';
    PrimeIcons.RADIO_ON = 'pi pi-radio-on';
    PrimeIcons.REFRESH = 'pi pi-refresh';
    PrimeIcons.REPLAY = 'pi pi-replay';
    PrimeIcons.REPLY = 'pi pi-reply';
    PrimeIcons.SAVE = 'pi pi-save';
    PrimeIcons.SEARCH_MINUS = 'pi pi-search-minus';
    PrimeIcons.SEARCH_PLUS = 'pi pi-search-plus';
    PrimeIcons.SEARCH = 'pi pi-search';
    PrimeIcons.SEND = 'pi pi-send';
    PrimeIcons.SHARE_ALT = 'pi pi-share-alt';
    PrimeIcons.SHIELD = 'pi pi-shield';
    PrimeIcons.SHOPPING_CART = 'pi pi-shopping-cart';
    PrimeIcons.SIGN_IN = 'pi pi-sign-in';
    PrimeIcons.SIGN_OUT = 'pi pi-sign-out';
    PrimeIcons.SITEMAP = 'pi pi-sitemap';
    PrimeIcons.SLACK = 'pi pi-slack';
    PrimeIcons.SLIDERS_H = 'pi pi-sliders-h';
    PrimeIcons.SLIDERS_V = 'pi pi-sliders-v';
    PrimeIcons.SORT_ALPHA_ALT_DOWN = 'pi pi-sort-alpha-alt-down';
    PrimeIcons.SORT_ALPHA_ALT_UP = 'pi pi-sort-alpha-alt-up';
    PrimeIcons.SORT_ALPHA_DOWN = 'pi pi-sort-alpha-down';
    PrimeIcons.SORT_ALPHA_UP = 'pi pi-sort-alpha-up';
    PrimeIcons.SORT_ALT = 'pi pi-sort-alt';
    PrimeIcons.SORT_AMOUNT_DOWN_ALT = 'pi pi-sort-amount-down-alt';
    PrimeIcons.SORT_AMOUNT_DOWN = 'pi pi-sort-amount-down';
    PrimeIcons.SORT_AMOUNT_UP_ALT = 'pi pi-sort-amount-up-alt';
    PrimeIcons.SORT_AMOUNT_UP = 'pi pi-sort-amount-up';
    PrimeIcons.SORT_DOWN = 'pi pi-sort-down';
    PrimeIcons.SORT_NUMERIC_ALT_DOWN = 'pi pi-sort-numeric-alt-down';
    PrimeIcons.SORT_NUMERIC_ALT_UP = 'pi pi-sort-numeric-alt-up';
    PrimeIcons.SORT_NUMERIC_DOWN = 'pi pi-sort-numeric-down';
    PrimeIcons.SORT_NUMERIC_UP = 'pi pi-sort-numeric-up';
    PrimeIcons.SORT_UP = 'pi pi-sort-up';
    PrimeIcons.SORT = 'pi pi-sort';
    PrimeIcons.SPINNER = 'pi pi-spinner';
    PrimeIcons.STAR_O = 'pi pi-star-o';
    PrimeIcons.STAR = 'pi pi-star';
    PrimeIcons.STEP_BACKWARD_ALT = 'pi pi-step-backward-alt';
    PrimeIcons.STEP_BACKWARD = 'pi pi-step-backward';
    PrimeIcons.STEP_FORWARD_ALT = 'pi pi-step-forward-alt';
    PrimeIcons.STEP_FORWARD = 'pi pi-step-forward';
    PrimeIcons.SUN = 'pi pi-sun';
    PrimeIcons.TABLE = 'pi pi-table';
    PrimeIcons.TABLET = 'pi pi-tablet';
    PrimeIcons.TAG = 'pi pi-tag';
    PrimeIcons.TAGS = 'pi pi-tags';
    PrimeIcons.TH_LARGE = 'pi pi-th-large';
    PrimeIcons.THUMBS_DOWN = 'pi pi-thumbs-down';
    PrimeIcons.THUMBS_UP = 'pi pi-thumbs-up';
    PrimeIcons.TICKET = 'pi pi-ticket';
    PrimeIcons.TIMES_CIRCLE = 'pi pi-times-circle';
    PrimeIcons.TIMES = 'pi pi-times';
    PrimeIcons.TRASH = 'pi pi-trash';
    PrimeIcons.TWITTER = 'pi pi-twitter';
    PrimeIcons.UNDO = 'pi pi-undo';
    PrimeIcons.UNLOCK = 'pi pi-unlock';
    PrimeIcons.UPLOAD = 'pi pi-upload';
    PrimeIcons.USER_EDIT = 'pi pi-user-edit';
    PrimeIcons.USER_MINUS = 'pi pi-user-minus';
    PrimeIcons.USER_PLUS = 'pi pi-user-plus';
    PrimeIcons.USER = 'pi pi-user';
    PrimeIcons.USERS = 'pi pi-users';
    PrimeIcons.VIDEO = 'pi pi-video';
    PrimeIcons.VIMEO = 'pi pi-vimeo';
    PrimeIcons.VOLUME_DOWN = 'pi pi-volume-down';
    PrimeIcons.VOLUME_OFF = 'pi pi-volume-off';
    PrimeIcons.VOLUME_UP = 'pi pi-volume-up';
    PrimeIcons.YOUTUBE = 'pi pi-youtube';
    PrimeIcons.WALLET = 'pi pi-wallet';
    PrimeIcons.WIFI = 'pi pi-wifi';
    PrimeIcons.WINDOW_MAXIMIZE = 'pi pi-window-maximize';
    PrimeIcons.WINDOW_MINIMIZE = 'pi pi-window-minimize';

    var FilterOperator = function FilterOperator() {
      _classCallCheck(this, FilterOperator);
    };

    FilterOperator.AND = 'and';
    FilterOperator.OR = 'or';

    var Header = function Header() {
      _classCallCheck(this, Header);
    };

    Header.ɵfac = function Header_Factory(t) {
      return new (t || Header)();
    };

    Header.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Header,
      selectors: [["p-header"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function Header_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Header, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'p-header',
          template: '<ng-content></ng-content>'
        }]
      }], null, null);
    })();

    var Footer = function Footer() {
      _classCallCheck(this, Footer);
    };

    Footer.ɵfac = function Footer_Factory(t) {
      return new (t || Footer)();
    };

    Footer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Footer,
      selectors: [["p-footer"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function Footer_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Footer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'p-footer',
          template: '<ng-content></ng-content>'
        }]
      }], null, null);
    })();

    var PrimeTemplate =
    /*#__PURE__*/
    function () {
      function PrimeTemplate(template) {
        _classCallCheck(this, PrimeTemplate);

        this.template = template;
      }

      _createClass(PrimeTemplate, [{
        key: "getType",
        value: function getType() {
          return this.name;
        }
      }]);

      return PrimeTemplate;
    }();

    PrimeTemplate.ɵfac = function PrimeTemplate_Factory(t) {
      return new (t || PrimeTemplate)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
    };

    PrimeTemplate.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: PrimeTemplate,
      selectors: [["", "pTemplate", ""]],
      inputs: {
        type: "type",
        name: ["pTemplate", "name"]
      }
    });

    PrimeTemplate.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };

    PrimeTemplate.propDecorators = {
      type: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['pTemplate']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrimeTemplate, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[pTemplate]',
          host: {}
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      }, {
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['pTemplate']
        }]
      });
    })();

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: function declarations() {
          return [Header, Footer, PrimeTemplate];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]];
        },
        exports: function exports() {
          return [Header, Footer, PrimeTemplate];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
          exports: [Header, Footer, PrimeTemplate],
          declarations: [Header, Footer, PrimeTemplate]
        }]
      }], null, null);
    })();

    var TreeDragDropService =
    /*#__PURE__*/
    function () {
      function TreeDragDropService() {
        _classCallCheck(this, TreeDragDropService);

        this.dragStartSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.dragStopSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.dragStart$ = this.dragStartSource.asObservable();
        this.dragStop$ = this.dragStopSource.asObservable();
      }

      _createClass(TreeDragDropService, [{
        key: "startDrag",
        value: function startDrag(event) {
          this.dragStartSource.next(event);
        }
      }, {
        key: "stopDrag",
        value: function stopDrag(event) {
          this.dragStopSource.next(event);
        }
      }]);

      return TreeDragDropService;
    }();

    TreeDragDropService.ɵfac = function TreeDragDropService_Factory(t) {
      return new (t || TreeDragDropService)();
    };

    TreeDragDropService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TreeDragDropService,
      factory: TreeDragDropService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeDragDropService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=primeng-api.js.map

    /***/

  },

  /***/
  "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js ***!
    \**********************************************************************/

  /*! exports provided: Button, ButtonDirective, ButtonModule */

  /***/
  function node_modulesPrimeng__ivy_ngcc__Fesm2015PrimengButtonJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Button", function () {
      return Button;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ButtonDirective", function () {
      return ButtonDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ButtonModule", function () {
      return ButtonModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var primeng_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! primeng/dom */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dom.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var primeng_ripple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/ripple */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-ripple.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");

    function Button_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    var _c0 = function _c0(a1, a2, a3, a4) {
      return {
        "p-button-icon": true,
        "p-button-icon-left": a1,
        "p-button-icon-right": a2,
        "p-button-icon-top": a3,
        "p-button-icon-bottom": a4
      };
    };

    function Button_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 4);
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](4, _c0, ctx_r1.iconPos === "left" && ctx_r1.label, ctx_r1.iconPos === "right" && ctx_r1.label, ctx_r1.iconPos === "top" && ctx_r1.label, ctx_r1.iconPos === "bottom" && ctx_r1.label));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true);
      }
    }

    function Button_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.badgeClass);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.badgeStyleClass());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.badge);
      }
    }

    var _c1 = function _c1(a1, a2) {
      return {
        "p-button p-component": true,
        "p-button-icon-only": a1,
        "p-button-vertical": a2
      };
    };

    var _c2 = ["*"];

    var ButtonDirective =
    /*#__PURE__*/
    function () {
      function ButtonDirective(el) {
        _classCallCheck(this, ButtonDirective);

        this.el = el;
        this.iconPos = 'left';
      }

      _createClass(ButtonDirective, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this._initialStyleClass = this.el.nativeElement.className;
          primeng_dom__WEBPACK_IMPORTED_MODULE_1__["DomHandler"].addMultipleClasses(this.el.nativeElement, this.getStyleClass());

          if (this.icon) {
            var iconElement = document.createElement("span");
            iconElement.className = 'p-button-icon';
            iconElement.setAttribute("aria-hidden", "true");
            var iconPosClass = this.label ? 'p-button-icon-' + this.iconPos : null;

            if (iconPosClass) {
              primeng_dom__WEBPACK_IMPORTED_MODULE_1__["DomHandler"].addClass(iconElement, iconPosClass);
            }

            primeng_dom__WEBPACK_IMPORTED_MODULE_1__["DomHandler"].addMultipleClasses(iconElement, this.icon);
            this.el.nativeElement.appendChild(iconElement);
          }

          var labelElement = document.createElement("span");

          if (this.icon && !this.label) {
            labelElement.setAttribute('aria-hidden', 'true');
          }

          labelElement.className = 'p-button-label';
          labelElement.appendChild(document.createTextNode(this.label || '&nbsp;'));
          this.el.nativeElement.appendChild(labelElement);
          this.initialized = true;
        }
      }, {
        key: "getStyleClass",
        value: function getStyleClass() {
          var styleClass = 'p-button p-component';

          if (this.icon && !this.label) {
            styleClass = styleClass + ' p-button-icon-only';
          }

          return styleClass;
        }
      }, {
        key: "setStyleClass",
        value: function setStyleClass() {
          var styleClass = this.getStyleClass();
          this.el.nativeElement.className = styleClass + ' ' + this._initialStyleClass;
        }
      }, {
        key: "label",
        get: function get() {
          return this._label;
        },
        set: function set(val) {
          this._label = val;

          if (this.initialized) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_1__["DomHandler"].findSingle(this.el.nativeElement, '.p-button-label').textContent = this._label || '&nbsp;';
            this.setStyleClass();
          }
        }
      }, {
        key: "icon",
        get: function get() {
          return this._icon;
        },
        set: function set(val) {
          this._icon = val;

          if (this.initialized) {
            if (this.iconPos) primeng_dom__WEBPACK_IMPORTED_MODULE_1__["DomHandler"].findSingle(this.el.nativeElement, '.p-button-icon').className = 'p-button-icon p-button-icon-' + this.iconPos + ' ' + this._icon;else primeng_dom__WEBPACK_IMPORTED_MODULE_1__["DomHandler"].findSingle(this.el.nativeElement, '.p-button-icon').className = 'p-button-icon ' + this._icon;
            this.setStyleClass();
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.initialized = false;
        }
      }]);

      return ButtonDirective;
    }();

    ButtonDirective.ɵfac = function ButtonDirective_Factory(t) {
      return new (t || ButtonDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    ButtonDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ButtonDirective,
      selectors: [["", "pButton", ""]],
      inputs: {
        iconPos: "iconPos",
        label: "label",
        icon: "icon"
      }
    });

    ButtonDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    ButtonDirective.propDecorators = {
      iconPos: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      label: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      icon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[pButton]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        iconPos: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    var Button =
    /*#__PURE__*/
    function () {
      function Button() {
        _classCallCheck(this, Button);

        this.type = "button";
        this.iconPos = 'left';
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(Button, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this4 = this;

          this.templates.forEach(function (item) {
            switch (item.getType()) {
              case 'content':
                _this4.contentTemplate = item.template;
                break;

              default:
                _this4.contentTemplate = item.template;
                break;
            }
          });
        }
      }, {
        key: "badgeStyleClass",
        value: function badgeStyleClass() {
          return {
            'p-badge p-component': true,
            'p-badge-no-gutter': this.badge && String(this.badge).length === 1
          };
        }
      }]);

      return Button;
    }();

    Button.ɵfac = function Button_Factory(t) {
      return new (t || Button)();
    };

    Button.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Button,
      selectors: [["p-button"]],
      contentQueries: function Button_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeTemplate"], false);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      inputs: {
        type: "type",
        iconPos: "iconPos",
        icon: "icon",
        badge: "badge",
        label: "label",
        disabled: "disabled",
        style: "style",
        styleClass: "styleClass",
        badgeClass: "badgeClass"
      },
      outputs: {
        onClick: "onClick",
        onFocus: "onFocus",
        onBlur: "onBlur"
      },
      ngContentSelectors: _c2,
      decls: 7,
      vars: 14,
      consts: [["pRipple", "", 3, "ngStyle", "disabled", "ngClass", "click", "focus", "blur"], [4, "ngTemplateOutlet"], [3, "ngClass", "class", 4, "ngIf"], [1, "p-button-label"], [3, "ngClass"]],
      template: function Button_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Button_Template_button_click_0_listener($event) {
            return ctx.onClick.emit($event);
          })("focus", function Button_Template_button_focus_0_listener($event) {
            return ctx.onFocus.emit($event);
          })("blur", function Button_Template_button_blur_0_listener($event) {
            return ctx.onBlur.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Button_ng_container_2_Template, 1, 0, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Button_span_3_Template, 1, 9, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Button_span_6_Template, 2, 4, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.style)("disabled", ctx.disabled)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c1, ctx.icon && !ctx.label, (ctx.iconPos === "top" || ctx.iconPos === "bottom") && ctx.label));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("type", ctx.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.contentTemplate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", ctx.icon && !ctx.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label || "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.badge);
        }
      },
      directives: [primeng_ripple__WEBPACK_IMPORTED_MODULE_3__["Ripple"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      encapsulation: 2,
      changeDetection: 0
    });
    Button.propDecorators = {
      type: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      iconPos: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      icon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      badge: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      label: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      style: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      styleClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      badgeClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      templates: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeTemplate"]]
      }],
      onClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onFocus: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onBlur: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Button, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'p-button',
          template: "\n        <button [attr.type]=\"type\" [class]=\"styleClass\" [ngStyle]=\"style\" [disabled]=\"disabled\"\n            [ngClass]=\"{'p-button p-component':true,\n                        'p-button-icon-only': (icon && !label),\n                        'p-button-vertical': (iconPos === 'top' || iconPos === 'bottom') && label}\"\n                        (click)=\"onClick.emit($event)\" (focus)=\"onFocus.emit($event)\" (blur)=\"onBlur.emit($event)\" pRipple>\n            <ng-content></ng-content>\n            <ng-container *ngTemplateOutlet=\"contentTemplate\"></ng-container>\n            <span [ngClass]=\"{'p-button-icon': true,\n                        'p-button-icon-left': iconPos === 'left' && label,\n                        'p-button-icon-right': iconPos === 'right' && label,\n                        'p-button-icon-top': iconPos === 'top' && label,\n                        'p-button-icon-bottom': iconPos === 'bottom' && label}\"\n                        [class]=\"icon\" *ngIf=\"icon\" [attr.aria-hidden]=\"true\"></span>\n            <span class=\"p-button-label\" [attr.aria-hidden]=\"icon && !label\">{{label||'&nbsp;'}}</span>\n            <span [ngClass]=\"badgeStyleClass()\" *ngIf=\"badge\" [class]=\"badgeClass\">{{badge}}</span>\n        </button>\n    ",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [];
      }, {
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        iconPos: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onBlur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        badge: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        styleClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        badgeClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        templates: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeTemplate"]]
        }]
      });
    })();

    var ButtonModule = function ButtonModule() {
      _classCallCheck(this, ButtonModule);
    };

    ButtonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ButtonModule
    });
    ButtonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ButtonModule_Factory(t) {
        return new (t || ButtonModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_3__["RippleModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ButtonModule, {
        declarations: function declarations() {
          return [ButtonDirective, Button];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_3__["RippleModule"]];
        },
        exports: function exports() {
          return [ButtonDirective, Button];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_3__["RippleModule"]],
          exports: [ButtonDirective, Button],
          declarations: [ButtonDirective, Button]
        }]
      }], null, null);
    })();
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=primeng-button.js.map

    /***/

  },

  /***/
  "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dialog.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dialog.js ***!
    \**********************************************************************/

  /*! exports provided: Dialog, DialogModule */

  /***/
  function node_modulesPrimeng__ivy_ngcc__Fesm2015PrimengDialogJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Dialog", function () {
      return Dialog;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogModule", function () {
      return DialogModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var primeng_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/dom */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dom.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
    /* harmony import */


    var primeng_focustrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/focustrap */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-focustrap.js");
    /* harmony import */


    var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/ripple */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-ripple.js");
    /* harmony import */


    var primeng_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/utils */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-utils.js");

    var _c0 = ["titlebar"];
    var _c1 = ["content"];
    var _c2 = ["footer"];

    function Dialog_div_0_div_1_div_2_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r12.id + "-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.header);
      }
    }

    function Dialog_div_0_div_1_div_2_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r13.id + "-label");
      }
    }

    function Dialog_div_0_div_1_div_2_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    var _c3 = function _c3() {
      return {
        "p-dialog-header-icon p-dialog-header-maximize p-link": true
      };
    };

    function Dialog_div_0_div_1_div_2_button_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Dialog_div_0_div_1_div_2_button_6_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r17.maximize();
        })("keydown.enter", function Dialog_div_0_div_1_div_2_button_6_Template_button_keydown_enter_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r19.maximize();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r15.maximized ? ctx_r15.minimizeIcon : ctx_r15.maximizeIcon);
      }
    }

    var _c4 = function _c4() {
      return {
        "p-dialog-header-icon p-dialog-header-close p-link": true
      };
    };

    function Dialog_div_0_div_1_div_2_button_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Dialog_div_0_div_1_div_2_button_7_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r20.close($event);
        })("keydown.enter", function Dialog_div_0_div_1_div_2_button_7_Template_button_keydown_enter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r22.close($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c4));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r16.closeIcon);
      }
    }

    function Dialog_div_0_div_1_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11, 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function Dialog_div_0_div_1_div_2_Template_div_mousedown_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r23.initDrag($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Dialog_div_0_div_1_div_2_span_2_Template, 2, 2, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Dialog_div_0_div_1_div_2_span_3_Template, 2, 1, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Dialog_div_0_div_1_div_2_ng_container_4_Template, 1, 0, "ng-container", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Dialog_div_0_div_1_div_2_button_6_Template, 2, 3, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, Dialog_div_0_div_1_div_2_button_7_Template, 2, 3, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.header);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.headerFacet);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r6.headerTemplate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.maximizable);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.closable);
      }
    }

    function Dialog_div_0_div_1_ng_container_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function Dialog_div_0_div_1_div_7_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function Dialog_div_0_div_1_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20, 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Dialog_div_0_div_1_div_7_ng_container_3_Template, 1, 0, "ng-container", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r9.footerTemplate);
      }
    }

    function Dialog_div_0_div_1_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function Dialog_div_0_div_1_div_8_Template_div_mousedown_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r27.initResize($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c5 = function _c5(a1, a2, a3, a4) {
      return {
        "p-dialog p-component": true,
        "p-dialog-rtl": a1,
        "p-dialog-draggable": a2,
        "p-dialog-resizable": a3,
        "p-dialog-maximized": a4
      };
    };

    var _c6 = function _c6(a0, a1) {
      return {
        transform: a0,
        transition: a1
      };
    };

    var _c7 = function _c7(a1) {
      return {
        value: "visible",
        params: a1
      };
    };

    function Dialog_div_0_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3, 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@animation.start", function Dialog_div_0_div_1_Template_div_animation_animation_start_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r29.onAnimationStart($event);
        })("@animation.done", function Dialog_div_0_div_1_Template_div_animation_animation_done_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r31.onAnimationEnd($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Dialog_div_0_div_1_div_2_Template, 8, 5, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6, 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Dialog_div_0_div_1_ng_container_6_Template, 1, 0, "ng-container", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, Dialog_div_0_div_1_div_7_Template, 4, 1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, Dialog_div_0_div_1_div_8_Template, 1, 0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r4.styleClass);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](15, _c5, ctx_r4.rtl, ctx_r4.draggable, ctx_r4.resizable, ctx_r4.maximized))("ngStyle", ctx_r4.style)("pFocusTrapDisabled", ctx_r4.focusTrap === false)("@animation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](20, _c6, ctx_r4.transformOptions, ctx_r4.transitionOptions)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", ctx_r4.id + "-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.showHeader);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r4.contentStyleClass);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-dialog-content")("ngStyle", ctx_r4.contentStyle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.contentTemplate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.footerFacet || ctx_r4.footerTemplate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.resizable);
      }
    }

    var _c8 = function _c8(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
      return {
        "p-dialog-mask": true,
        "p-component-overlay": a1,
        "p-dialog-mask-scrollblocker": a2,
        "p-dialog-left": a3,
        "p-dialog-right": a4,
        "p-dialog-top": a5,
        "p-dialog-top-left": a6,
        "p-dialog-top-right": a7,
        "p-dialog-bottom": a8,
        "p-dialog-bottom-left": a9,
        "p-dialog-bottom-right": a10
      };
    };

    function Dialog_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dialog_div_0_div_1_Template, 9, 25, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r3.maskStyleClass);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunctionV"](4, _c8, [ctx_r3.modal, ctx_r3.modal || ctx_r3.blockScroll, ctx_r3.position === "left", ctx_r3.position === "right", ctx_r3.position === "top", ctx_r3.position === "topleft" || ctx_r3.position === "top-left", ctx_r3.position === "topright" || ctx_r3.position === "top-right", ctx_r3.position === "bottom", ctx_r3.position === "bottomleft" || ctx_r3.position === "bottom-left", ctx_r3.position === "bottomright" || ctx_r3.position === "bottom-right"]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.visible);
      }
    }

    var _c9 = ["*", [["p-header"]], [["p-footer"]]];
    var _c10 = ["*", "p-header", "p-footer"];
    var showAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: '{{transform}}',
      opacity: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{transition}}')]);
    var hideAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{transition}}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: '{{transform}}',
      opacity: 0
    }))]);

    var Dialog =
    /*#__PURE__*/
    function () {
      function Dialog(el, renderer, zone, cd) {
        _classCallCheck(this, Dialog);

        this.el = el;
        this.renderer = renderer;
        this.zone = zone;
        this.cd = cd;
        this.draggable = true;
        this.resizable = true;
        this.closeOnEscape = true;
        this.closable = true;
        this.showHeader = true;
        this.blockScroll = false;
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.minX = 0;
        this.minY = 0;
        this.focusOnShow = true;
        this.keepInViewport = true;
        this.focusTrap = true;
        this.transitionOptions = '150ms cubic-bezier(0, 0, 0.2, 1)';
        this.closeIcon = 'pi pi-times';
        this.minimizeIcon = 'pi pi-window-minimize';
        this.maximizeIcon = 'pi pi-window-maximize';
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onResizeInit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onResizeEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMaximize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.id = Object(primeng_utils__WEBPACK_IMPORTED_MODULE_7__["UniqueComponentId"])();
        this._style = {};
        this._position = "center";
        this.transformOptions = "scale(0.7)";
      }

      _createClass(Dialog, [{
        key: "positionLeft",
        get: function get() {
          return 0;
        },
        set: function set(_positionLeft) {
          console.log("positionLeft property is deprecated.");
        }
      }, {
        key: "positionTop",
        get: function get() {
          return 0;
        },
        set: function set(_positionTop) {
          console.log("positionTop property is deprecated.");
        }
      }, {
        key: "responsive",
        get: function get() {
          return false;
        },
        set: function set(_responsive) {
          console.log("Responsive property is deprecated.");
        }
      }, {
        key: "breakpoint",
        get: function get() {
          return 649;
        },
        set: function set(_breakpoint) {
          console.log("Breakpoint property is not utilized and deprecated, use breakpoints or CSS media queries instead.");
        }
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this5 = this;

          this.templates.forEach(function (item) {
            switch (item.getType()) {
              case 'header':
                _this5.headerTemplate = item.template;
                break;

              case 'content':
                _this5.contentTemplate = item.template;
                break;

              case 'footer':
                _this5.footerTemplate = item.template;
                break;

              default:
                _this5.contentTemplate = item.template;
                break;
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.breakpoints) {
            this.createStyle();
          }
        }
      }, {
        key: "visible",
        get: function get() {
          return this._visible;
        },
        set: function set(value) {
          this._visible = value;

          if (this._visible && !this.maskVisible) {
            this.maskVisible = true;
          }
        }
      }, {
        key: "style",
        get: function get() {
          return this._style;
        },
        set: function set(value) {
          if (value) {
            this._style = Object.assign({}, value);
            this.originalStyle = value;
          }
        }
      }, {
        key: "position",
        get: function get() {
          return this._position;
        },
        set: function set(value) {
          this._position = value;

          switch (value) {
            case 'topleft':
            case 'bottomleft':
            case 'left':
              this.transformOptions = "translate3d(-100%, 0px, 0px)";
              break;

            case 'topright':
            case 'bottomright':
            case 'right':
              this.transformOptions = "translate3d(100%, 0px, 0px)";
              break;

            case 'bottom':
              this.transformOptions = "translate3d(0px, 100%, 0px)";
              break;

            case 'top':
              this.transformOptions = "translate3d(0px, -100%, 0px)";
              break;

            default:
              this.transformOptions = "scale(0.7)";
              break;
          }
        }
      }, {
        key: "focus",
        value: function focus() {
          var focusable = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].findSingle(this.container, '[autofocus]');

          if (focusable) {
            this.zone.runOutsideAngular(function () {
              setTimeout(function () {
                return focusable.focus();
              }, 5);
            });
          }
        }
      }, {
        key: "close",
        value: function close(event) {
          this.visibleChange.emit(false);
          event.preventDefault();
        }
      }, {
        key: "enableModality",
        value: function enableModality() {
          var _this6 = this;

          if (this.closable && this.dismissableMask) {
            this.maskClickListener = this.renderer.listen(this.wrapper, 'mousedown', function (event) {
              if (_this6.wrapper && _this6.wrapper.isSameNode(event.target)) {
                _this6.close(event);
              }
            });
          }

          if (this.modal) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].addClass(document.body, 'p-overflow-hidden');
          }
        }
      }, {
        key: "disableModality",
        value: function disableModality() {
          if (this.wrapper) {
            if (this.dismissableMask) {
              this.unbindMaskClickListener();
            }

            if (this.modal) {
              primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].removeClass(document.body, 'p-overflow-hidden');
            }

            if (!this.cd.destroyed) {
              this.cd.detectChanges();
            }
          }
        }
      }, {
        key: "maximize",
        value: function maximize() {
          this.maximized = !this.maximized;

          if (!this.modal && !this.blockScroll) {
            if (this.maximized) primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].addClass(document.body, 'p-overflow-hidden');else primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].removeClass(document.body, 'p-overflow-hidden');
          }

          this.onMaximize.emit({
            'maximized': this.maximized
          });
        }
      }, {
        key: "unbindMaskClickListener",
        value: function unbindMaskClickListener() {
          if (this.maskClickListener) {
            this.maskClickListener();
            this.maskClickListener = null;
          }
        }
      }, {
        key: "moveOnTop",
        value: function moveOnTop() {
          if (this.autoZIndex) {
            this.container.style.zIndex = String(this.baseZIndex + ++primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].zindex);
            this.wrapper.style.zIndex = String(this.baseZIndex + (primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].zindex - 1));
          }
        }
      }, {
        key: "createStyle",
        value: function createStyle() {
          if (!this.styleElement) {
            this.styleElement = document.createElement('style');
            this.styleElement.type = 'text/css';
            document.head.appendChild(this.styleElement);
            var innerHTML = '';

            for (var breakpoint in this.breakpoints) {
              innerHTML += "\n                    @media screen and (max-width: ".concat(breakpoint, ") {\n                        .p-dialog[").concat(this.id, "] {\n                            width: ").concat(this.breakpoints[breakpoint], " !important;\n                        }\n                    }\n                ");
            }

            this.styleElement.innerHTML = innerHTML;
          }
        }
      }, {
        key: "initDrag",
        value: function initDrag(event) {
          if (primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].hasClass(event.target, 'p-dialog-header-icon') || primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].hasClass(event.target.parentElement, 'p-dialog-header-icon')) {
            return;
          }

          if (this.draggable) {
            this.dragging = true;
            this.lastPageX = event.pageX;
            this.lastPageY = event.pageY;
            this.container.style.margin = '0';
            primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].addClass(document.body, 'p-unselectable-text');
          }
        }
      }, {
        key: "onKeydown",
        value: function onKeydown(event) {
          if (this.focusTrap) {
            if (event.which === 9) {
              event.preventDefault();
              var focusableElements = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getFocusableElements(this.container);

              if (focusableElements && focusableElements.length > 0) {
                if (!focusableElements[0].ownerDocument.activeElement) {
                  focusableElements[0].focus();
                } else {
                  var focusedIndex = focusableElements.indexOf(focusableElements[0].ownerDocument.activeElement);

                  if (event.shiftKey) {
                    if (focusedIndex == -1 || focusedIndex === 0) focusableElements[focusableElements.length - 1].focus();else focusableElements[focusedIndex - 1].focus();
                  } else {
                    if (focusedIndex == -1 || focusedIndex === focusableElements.length - 1) focusableElements[0].focus();else focusableElements[focusedIndex + 1].focus();
                  }
                }
              }
            }
          }
        }
      }, {
        key: "onDrag",
        value: function onDrag(event) {
          if (this.dragging) {
            var containerWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getOuterWidth(this.container);
            var containerHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getOuterHeight(this.container);
            var deltaX = event.pageX - this.lastPageX;
            var deltaY = event.pageY - this.lastPageY;
            var offset = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getOffset(this.container);
            var leftPos = offset.left + deltaX;
            var topPos = offset.top + deltaY;
            var viewport = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getViewport();
            this.container.style.position = 'fixed';

            if (this.keepInViewport) {
              if (leftPos >= this.minX && leftPos + containerWidth < viewport.width) {
                this._style.left = leftPos + 'px';
                this.lastPageX = event.pageX;
                this.container.style.left = leftPos + 'px';
              }

              if (topPos >= this.minY && topPos + containerHeight < viewport.height) {
                this._style.top = topPos + 'px';
                this.lastPageY = event.pageY;
                this.container.style.top = topPos + 'px';
              }
            } else {
              this.lastPageX = event.pageX;
              this.container.style.left = leftPos + 'px';
              this.lastPageY = event.pageY;
              this.container.style.top = topPos + 'px';
            }
          }
        }
      }, {
        key: "endDrag",
        value: function endDrag(event) {
          if (this.dragging) {
            this.dragging = false;
            primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].removeClass(document.body, 'p-unselectable-text');
            this.cd.detectChanges();
            this.onDragEnd.emit(event);
          }
        }
      }, {
        key: "resetPosition",
        value: function resetPosition() {
          this.container.style.position = '';
          this.container.style.left = '';
          this.container.style.top = '';
          this.container.style.margin = '';
        } //backward compatibility

      }, {
        key: "center",
        value: function center() {
          this.resetPosition();
        }
      }, {
        key: "initResize",
        value: function initResize(event) {
          if (this.resizable) {
            this.resizing = true;
            this.lastPageX = event.pageX;
            this.lastPageY = event.pageY;
            primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].addClass(document.body, 'p-unselectable-text');
            this.onResizeInit.emit(event);
          }
        }
      }, {
        key: "onResize",
        value: function onResize(event) {
          if (this.resizing) {
            var deltaX = event.pageX - this.lastPageX;
            var deltaY = event.pageY - this.lastPageY;
            var containerWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getOuterWidth(this.container);
            var containerHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getOuterHeight(this.container);
            var contentHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getOuterHeight(this.contentViewChild.nativeElement);
            var newWidth = containerWidth + deltaX;
            var newHeight = containerHeight + deltaY;
            var minWidth = this.container.style.minWidth;
            var minHeight = this.container.style.minHeight;
            var offset = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getOffset(this.container);
            var viewport = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getViewport();
            var hasBeenDragged = !parseInt(this.container.style.top) || !parseInt(this.container.style.left);

            if (hasBeenDragged) {
              newWidth += deltaX;
              newHeight += deltaY;
            }

            if ((!minWidth || newWidth > parseInt(minWidth)) && offset.left + newWidth < viewport.width) {
              this._style.width = newWidth + 'px';
              this.container.style.width = this._style.width;
            }

            if ((!minHeight || newHeight > parseInt(minHeight)) && offset.top + newHeight < viewport.height) {
              this.contentViewChild.nativeElement.style.height = contentHeight + newHeight - containerHeight + 'px';

              if (this._style.height) {
                this._style.height = newHeight + 'px';
                this.container.style.height = this._style.height;
              }
            }

            this.lastPageX = event.pageX;
            this.lastPageY = event.pageY;
          }
        }
      }, {
        key: "resizeEnd",
        value: function resizeEnd(event) {
          if (this.resizing) {
            this.resizing = false;
            primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].removeClass(document.body, 'p-unselectable-text');
            this.onResizeEnd.emit(event);
          }
        }
      }, {
        key: "bindGlobalListeners",
        value: function bindGlobalListeners() {
          if (this.draggable) {
            this.bindDocumentDragListener();
            this.bindDocumentDragEndListener();
          }

          if (this.resizable) {
            this.bindDocumentResizeListeners();
          }

          if (this.closeOnEscape && this.closable) {
            this.bindDocumentEscapeListener();
          }
        }
      }, {
        key: "unbindGlobalListeners",
        value: function unbindGlobalListeners() {
          this.unbindDocumentDragListener();
          this.unbindDocumentDragEndListener();
          this.unbindDocumentResizeListeners();
          this.unbindDocumentEscapeListener();
        }
      }, {
        key: "bindDocumentDragListener",
        value: function bindDocumentDragListener() {
          var _this7 = this;

          this.zone.runOutsideAngular(function () {
            _this7.documentDragListener = _this7.onDrag.bind(_this7);
            window.document.addEventListener('mousemove', _this7.documentDragListener);
          });
        }
      }, {
        key: "unbindDocumentDragListener",
        value: function unbindDocumentDragListener() {
          if (this.documentDragListener) {
            window.document.removeEventListener('mousemove', this.documentDragListener);
            this.documentDragListener = null;
          }
        }
      }, {
        key: "bindDocumentDragEndListener",
        value: function bindDocumentDragEndListener() {
          var _this8 = this;

          this.zone.runOutsideAngular(function () {
            _this8.documentDragEndListener = _this8.endDrag.bind(_this8);
            window.document.addEventListener('mouseup', _this8.documentDragEndListener);
          });
        }
      }, {
        key: "unbindDocumentDragEndListener",
        value: function unbindDocumentDragEndListener() {
          if (this.documentDragEndListener) {
            window.document.removeEventListener('mouseup', this.documentDragEndListener);
            this.documentDragEndListener = null;
          }
        }
      }, {
        key: "bindDocumentResizeListeners",
        value: function bindDocumentResizeListeners() {
          var _this9 = this;

          this.zone.runOutsideAngular(function () {
            _this9.documentResizeListener = _this9.onResize.bind(_this9);
            _this9.documentResizeEndListener = _this9.resizeEnd.bind(_this9);
            window.document.addEventListener('mousemove', _this9.documentResizeListener);
            window.document.addEventListener('mouseup', _this9.documentResizeEndListener);
          });
        }
      }, {
        key: "unbindDocumentResizeListeners",
        value: function unbindDocumentResizeListeners() {
          if (this.documentResizeListener && this.documentResizeEndListener) {
            window.document.removeEventListener('mousemove', this.documentResizeListener);
            window.document.removeEventListener('mouseup', this.documentResizeEndListener);
            this.documentResizeListener = null;
            this.documentResizeEndListener = null;
          }
        }
      }, {
        key: "bindDocumentEscapeListener",
        value: function bindDocumentEscapeListener() {
          var _this10 = this;

          var documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
          this.documentEscapeListener = this.renderer.listen(documentTarget, 'keydown', function (event) {
            if (event.which == 27) {
              if (parseInt(_this10.container.style.zIndex) === primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].zindex + _this10.baseZIndex) {
                _this10.close(event);
              }
            }
          });
        }
      }, {
        key: "unbindDocumentEscapeListener",
        value: function unbindDocumentEscapeListener() {
          if (this.documentEscapeListener) {
            this.documentEscapeListener();
            this.documentEscapeListener = null;
          }
        }
      }, {
        key: "appendContainer",
        value: function appendContainer() {
          if (this.appendTo) {
            if (this.appendTo === 'body') document.body.appendChild(this.wrapper);else primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].appendChild(this.wrapper, this.appendTo);
          }
        }
      }, {
        key: "restoreAppend",
        value: function restoreAppend() {
          if (this.container && this.appendTo) {
            this.el.nativeElement.appendChild(this.wrapper);
          }
        }
      }, {
        key: "onAnimationStart",
        value: function onAnimationStart(event) {
          switch (event.toState) {
            case 'visible':
              this.container = event.element;
              this.wrapper = this.container.parentElement;
              this.appendContainer();
              this.moveOnTop();
              this.bindGlobalListeners();
              this.container.setAttribute(this.id, '');

              if (this.modal) {
                this.enableModality();
              }

              if (!this.modal && this.blockScroll) {
                primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].addClass(document.body, 'p-overflow-hidden');
              }

              if (this.focusOnShow) {
                this.focus();
              }

              break;
          }
        }
      }, {
        key: "onAnimationEnd",
        value: function onAnimationEnd(event) {
          switch (event.toState) {
            case 'void':
              this.onContainerDestroy();
              this.onHide.emit({});
              break;

            case 'visible':
              this.onShow.emit({});
              break;
          }
        }
      }, {
        key: "onContainerDestroy",
        value: function onContainerDestroy() {
          this.unbindGlobalListeners();
          this.dragging = false;
          this.maskVisible = false;

          if (this.maximized) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].removeClass(document.body, 'p-overflow-hidden');
            this.maximized = false;
          }

          if (this.modal) {
            this.disableModality();
          }

          if (this.blockScroll) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].removeClass(document.body, 'p-overflow-hidden');
          }

          this.container = null;
          this.wrapper = null;
          this._style = this.originalStyle ? Object.assign({}, this.originalStyle) : {};
        }
      }, {
        key: "destroyStyle",
        value: function destroyStyle() {
          if (this.styleElement) {
            document.head.removeChild(this.styleElement);
            this.styleElement = null;
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.container) {
            this.restoreAppend();
            this.onContainerDestroy();
          }

          this.destroyStyle();
        }
      }]);

      return Dialog;
    }();

    Dialog.ɵfac = function Dialog_Factory(t) {
      return new (t || Dialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    Dialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Dialog,
      selectors: [["p-dialog"]],
      contentQueries: function Dialog_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__["Header"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__["Footer"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeTemplate"], false);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerFacet = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footerFacet = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function Dialog_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footerViewChild = _t.first);
        }
      },
      inputs: {
        draggable: "draggable",
        resizable: "resizable",
        closeOnEscape: "closeOnEscape",
        closable: "closable",
        showHeader: "showHeader",
        blockScroll: "blockScroll",
        autoZIndex: "autoZIndex",
        baseZIndex: "baseZIndex",
        minX: "minX",
        minY: "minY",
        focusOnShow: "focusOnShow",
        keepInViewport: "keepInViewport",
        focusTrap: "focusTrap",
        transitionOptions: "transitionOptions",
        closeIcon: "closeIcon",
        minimizeIcon: "minimizeIcon",
        maximizeIcon: "maximizeIcon",
        positionLeft: "positionLeft",
        positionTop: "positionTop",
        responsive: "responsive",
        breakpoint: "breakpoint",
        visible: "visible",
        style: "style",
        position: "position",
        header: "header",
        contentStyle: "contentStyle",
        contentStyleClass: "contentStyleClass",
        modal: "modal",
        dismissableMask: "dismissableMask",
        rtl: "rtl",
        appendTo: "appendTo",
        breakpoints: "breakpoints",
        styleClass: "styleClass",
        maskStyleClass: "maskStyleClass",
        maximizable: "maximizable"
      },
      outputs: {
        onShow: "onShow",
        onHide: "onHide",
        visibleChange: "visibleChange",
        onResizeInit: "onResizeInit",
        onResizeEnd: "onResizeEnd",
        onDragEnd: "onDragEnd",
        onMaximize: "onMaximize"
      },
      ngContentSelectors: _c10,
      decls: 1,
      vars: 1,
      consts: [[3, "class", "ngClass", 4, "ngIf"], [3, "ngClass"], ["pFocusTrap", "", "role", "dialog", 3, "ngClass", "ngStyle", "class", "pFocusTrapDisabled", 4, "ngIf"], ["pFocusTrap", "", "role", "dialog", 3, "ngClass", "ngStyle", "pFocusTrapDisabled"], ["container", ""], ["class", "p-dialog-header", 3, "mousedown", 4, "ngIf"], [3, "ngClass", "ngStyle"], ["content", ""], [4, "ngTemplateOutlet"], ["class", "p-dialog-footer", 4, "ngIf"], ["class", "p-resizable-handle", "style", "z-index: 90;", 3, "mousedown", 4, "ngIf"], [1, "p-dialog-header", 3, "mousedown"], ["titlebar", ""], ["class", "p-dialog-title", 4, "ngIf"], [1, "p-dialog-header-icons"], ["type", "button", "tabindex", "-1", "pRipple", "", 3, "ngClass", "click", "keydown.enter", 4, "ngIf"], [1, "p-dialog-title"], ["type", "button", "tabindex", "-1", "pRipple", "", 3, "ngClass", "click", "keydown.enter"], [1, "p-dialog-header-maximize-icon", 3, "ngClass"], [1, "p-dialog-header-close-icon", 3, "ngClass"], [1, "p-dialog-footer"], ["footer", ""], [1, "p-resizable-handle", 2, "z-index", "90", 3, "mousedown"]],
      template: function Dialog_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Dialog_div_0_Template, 2, 15, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.maskVisible);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], primeng_focustrap__WEBPACK_IMPORTED_MODULE_5__["FocusTrap"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], primeng_ripple__WEBPACK_IMPORTED_MODULE_6__["Ripple"]],
      styles: [".p-dialog-mask{align-items:center;background-color:transparent;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition-property:background-color;width:100%}.p-dialog,.p-dialog-mask.p-component-overlay{pointer-events:auto}.p-dialog{display:flex;flex-direction:column;max-height:90%;position:relative;transform:scale(1)}.p-dialog-content{overflow-y:auto}.p-dialog-header{align-items:center;display:flex;flex-shrink:0;justify-content:space-between}.p-dialog-footer{flex-shrink:0}.p-dialog .p-dialog-header-icons{align-items:center;display:flex}.p-dialog .p-dialog-header-icon{align-items:center;display:flex;justify-content:center;overflow:hidden;position:relative}.p-dialog-mask.p-dialog-mask-leave{background-color:transparent}.p-fluid .p-dialog-footer .p-button{width:auto}.p-dialog-bottom-left .p-dialog,.p-dialog-bottom-right .p-dialog,.p-dialog-bottom .p-dialog,.p-dialog-left .p-dialog,.p-dialog-right .p-dialog,.p-dialog-top-left .p-dialog,.p-dialog-top-right .p-dialog,.p-dialog-top .p-dialog{margin:.75rem;transform:translateZ(0)}.p-dialog-maximized{height:100%;left:0!important;max-height:100%;top:0!important;transform:none;transition:none;width:100vw!important}.p-dialog-maximized .p-dialog-content{flex-grow:1}.p-dialog-left{justify-content:flex-start}.p-dialog-right{justify-content:flex-end}.p-dialog-top,.p-dialog-top-left{align-items:flex-start}.p-dialog-top-left{justify-content:flex-start}.p-dialog-top-right{align-items:flex-start;justify-content:flex-end}.p-dialog-bottom{align-items:flex-end}.p-dialog-bottom-left{align-items:flex-end;justify-content:flex-start}.p-dialog-bottom-right{align-items:flex-end;justify-content:flex-end}.p-dialog .p-resizable-handle{bottom:1px;cursor:se-resize;display:block;font-size:.1px;height:12px;position:absolute;right:1px;width:12px}.p-confirm-dialog .p-dialog-content{align-items:center;display:flex}"],
      encapsulation: 2,
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('animation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => visible', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(showAnimation)]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('visible => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(hideAnimation)])])]
      },
      changeDetection: 0
    });

    Dialog.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }];
    };

    Dialog.propDecorators = {
      header: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      draggable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      resizable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      positionLeft: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      positionTop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      contentStyle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      contentStyleClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      modal: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      closeOnEscape: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      dismissableMask: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      rtl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      closable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      responsive: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      appendTo: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      breakpoints: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      styleClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      maskStyleClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      showHeader: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      breakpoint: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      blockScroll: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      autoZIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      baseZIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      minX: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      minY: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      focusOnShow: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      maximizable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      keepInViewport: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      focusTrap: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      transitionOptions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      closeIcon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      minimizeIcon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      maximizeIcon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      headerFacet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [primeng_api__WEBPACK_IMPORTED_MODULE_4__["Header"]]
      }],
      footerFacet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [primeng_api__WEBPACK_IMPORTED_MODULE_4__["Footer"]]
      }],
      templates: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeTemplate"]]
      }],
      headerViewChild: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['titlebar']
      }],
      contentViewChild: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['content']
      }],
      footerViewChild: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['footer']
      }],
      onShow: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onHide: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      visibleChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onResizeInit: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onResizeEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onDragEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onMaximize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      visible: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      style: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      position: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Dialog, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'p-dialog',
          template: "\n        <div *ngIf=\"maskVisible\" [class]=\"maskStyleClass\"\n            [ngClass]=\"{'p-dialog-mask': true, 'p-component-overlay': this.modal, 'p-dialog-mask-scrollblocker': this.modal || this.blockScroll,\n                'p-dialog-left': position === 'left',\n                'p-dialog-right': position === 'right',\n                'p-dialog-top': position === 'top',\n                'p-dialog-top-left': position === 'topleft' || position === 'top-left',\n                'p-dialog-top-right': position === 'topright' || position === 'top-right',\n                'p-dialog-bottom': position === 'bottom',\n                'p-dialog-bottom-left': position === 'bottomleft' || position === 'bottom-left',\n                'p-dialog-bottom-right': position === 'bottomright' || position === 'bottom-right'}\">\n            <div #container [ngClass]=\"{'p-dialog p-component':true, 'p-dialog-rtl':rtl,'p-dialog-draggable':draggable,'p-dialog-resizable':resizable, 'p-dialog-maximized': maximized}\"\n                [ngStyle]=\"style\" [class]=\"styleClass\" *ngIf=\"visible\" pFocusTrap [pFocusTrapDisabled]=\"focusTrap === false\"\n                [@animation]=\"{value: 'visible', params: {transform: transformOptions, transition: transitionOptions}}\" (@animation.start)=\"onAnimationStart($event)\" (@animation.done)=\"onAnimationEnd($event)\" role=\"dialog\" [attr.aria-labelledby]=\"id + '-label'\">\n                <div #titlebar class=\"p-dialog-header\" (mousedown)=\"initDrag($event)\" *ngIf=\"showHeader\">\n                    <span [attr.id]=\"id + '-label'\" class=\"p-dialog-title\" *ngIf=\"header\">{{header}}</span>\n                    <span [attr.id]=\"id + '-label'\" class=\"p-dialog-title\" *ngIf=\"headerFacet\">\n                        <ng-content select=\"p-header\"></ng-content>\n                    </span>\n                    <ng-container *ngTemplateOutlet=\"headerTemplate\"></ng-container>\n                    <div class=\"p-dialog-header-icons\">\n                        <button *ngIf=\"maximizable\" type=\"button\" [ngClass]=\"{'p-dialog-header-icon p-dialog-header-maximize p-link':true}\" (click)=\"maximize()\" (keydown.enter)=\"maximize()\" tabindex=\"-1\" pRipple>\n                            <span class=\"p-dialog-header-maximize-icon\" [ngClass]=\"maximized ? minimizeIcon : maximizeIcon\"></span>\n                        </button>\n                        <button *ngIf=\"closable\" type=\"button\" [ngClass]=\"{'p-dialog-header-icon p-dialog-header-close p-link':true}\" (click)=\"close($event)\" (keydown.enter)=\"close($event)\" tabindex=\"-1\" pRipple>\n                            <span class=\"p-dialog-header-close-icon\" [ngClass]=\"closeIcon\"></span>\n                        </button>\n                    </div>\n                </div>\n                <div #content [ngClass]=\"'p-dialog-content'\" [ngStyle]=\"contentStyle\" [class]=\"contentStyleClass\">\n                    <ng-content></ng-content>\n                    <ng-container *ngTemplateOutlet=\"contentTemplate\"></ng-container>\n                </div>\n                <div #footer class=\"p-dialog-footer\" *ngIf=\"footerFacet || footerTemplate\">\n                    <ng-content select=\"p-footer\"></ng-content>\n                    <ng-container *ngTemplateOutlet=\"footerTemplate\"></ng-container>\n                </div>\n                <div *ngIf=\"resizable\" class=\"p-resizable-handle\" style=\"z-index: 90;\" (mousedown)=\"initResize($event)\"></div>\n            </div>\n        </div>\n    ",
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('animation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => visible', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(showAnimation)]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('visible => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(hideAnimation)])])],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          styles: [".p-dialog-mask{align-items:center;background-color:transparent;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition-property:background-color;width:100%}.p-dialog,.p-dialog-mask.p-component-overlay{pointer-events:auto}.p-dialog{display:flex;flex-direction:column;max-height:90%;position:relative;transform:scale(1)}.p-dialog-content{overflow-y:auto}.p-dialog-header{align-items:center;display:flex;flex-shrink:0;justify-content:space-between}.p-dialog-footer{flex-shrink:0}.p-dialog .p-dialog-header-icons{align-items:center;display:flex}.p-dialog .p-dialog-header-icon{align-items:center;display:flex;justify-content:center;overflow:hidden;position:relative}.p-dialog-mask.p-dialog-mask-leave{background-color:transparent}.p-fluid .p-dialog-footer .p-button{width:auto}.p-dialog-bottom-left .p-dialog,.p-dialog-bottom-right .p-dialog,.p-dialog-bottom .p-dialog,.p-dialog-left .p-dialog,.p-dialog-right .p-dialog,.p-dialog-top-left .p-dialog,.p-dialog-top-right .p-dialog,.p-dialog-top .p-dialog{margin:.75rem;transform:translateZ(0)}.p-dialog-maximized{height:100%;left:0!important;max-height:100%;top:0!important;transform:none;transition:none;width:100vw!important}.p-dialog-maximized .p-dialog-content{flex-grow:1}.p-dialog-left{justify-content:flex-start}.p-dialog-right{justify-content:flex-end}.p-dialog-top,.p-dialog-top-left{align-items:flex-start}.p-dialog-top-left{justify-content:flex-start}.p-dialog-top-right{align-items:flex-start;justify-content:flex-end}.p-dialog-bottom{align-items:flex-end}.p-dialog-bottom-left{align-items:flex-end;justify-content:flex-start}.p-dialog-bottom-right{align-items:flex-end;justify-content:flex-end}.p-dialog .p-resizable-handle{bottom:1px;cursor:se-resize;display:block;font-size:.1px;height:12px;position:absolute;right:1px;width:12px}.p-confirm-dialog .p-dialog-content{align-items:center;display:flex}"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, {
        draggable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        resizable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        closeOnEscape: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        closable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showHeader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        blockScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        autoZIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        baseZIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        minX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        minY: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        focusOnShow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        keepInViewport: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        focusTrap: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        transitionOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        closeIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        minimizeIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maximizeIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onShow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onHide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        visibleChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onResizeInit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onResizeEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onDragEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onMaximize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        positionLeft: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        positionTop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        responsive: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        breakpoint: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        visible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        header: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        contentStyle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        contentStyleClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        modal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dismissableMask: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        rtl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        appendTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        breakpoints: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        styleClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maskStyleClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maximizable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        headerFacet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [primeng_api__WEBPACK_IMPORTED_MODULE_4__["Header"]]
        }],
        footerFacet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [primeng_api__WEBPACK_IMPORTED_MODULE_4__["Footer"]]
        }],
        templates: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeTemplate"]]
        }],
        headerViewChild: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['titlebar']
        }],
        contentViewChild: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['content']
        }],
        footerViewChild: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['footer']
        }]
      });
    })();

    var DialogModule = function DialogModule() {
      _classCallCheck(this, DialogModule);
    };

    DialogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DialogModule
    });
    DialogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DialogModule_Factory(t) {
        return new (t || DialogModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], primeng_focustrap__WEBPACK_IMPORTED_MODULE_5__["FocusTrapModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_6__["RippleModule"]], primeng_api__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DialogModule, {
        declarations: function declarations() {
          return [Dialog];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], primeng_focustrap__WEBPACK_IMPORTED_MODULE_5__["FocusTrapModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_6__["RippleModule"]];
        },
        exports: function exports() {
          return [Dialog, primeng_api__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], primeng_focustrap__WEBPACK_IMPORTED_MODULE_5__["FocusTrapModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_6__["RippleModule"]],
          exports: [Dialog, primeng_api__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
          declarations: [Dialog]
        }]
      }], null, null);
    })();
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=primeng-dialog.js.map

    /***/

  },

  /***/
  "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dom.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dom.js ***!
    \*******************************************************************/

  /*! exports provided: ConnectedOverlayScrollHandler, DomHandler */

  /***/
  function node_modulesPrimeng__ivy_ngcc__Fesm2015PrimengDomJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectedOverlayScrollHandler", function () {
      return ConnectedOverlayScrollHandler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DomHandler", function () {
      return DomHandler;
    });
    /**
     * @dynamic is for runtime initializing DomHandler.browser
     *
     * If delete below comment, we can see this error message:
     *  Metadata collected contains an error that will be reported at runtime:
     *  Only initialized variables and constants can be referenced
     *  because the value of this variable is needed by the template compiler.
     */
    // @dynamic


    var DomHandler =
    /*#__PURE__*/
    function () {
      function DomHandler() {
        _classCallCheck(this, DomHandler);
      }

      _createClass(DomHandler, null, [{
        key: "addClass",
        value: function addClass(element, className) {
          if (element.classList) element.classList.add(className);else element.className += ' ' + className;
        }
      }, {
        key: "addMultipleClasses",
        value: function addMultipleClasses(element, className) {
          if (element.classList) {
            var styles = className.trim().split(' ');

            for (var i = 0; i < styles.length; i++) {
              element.classList.add(styles[i]);
            }
          } else {
            var _styles = className.split(' ');

            for (var _i = 0; _i < _styles.length; _i++) {
              element.className += ' ' + _styles[_i];
            }
          }
        }
      }, {
        key: "removeClass",
        value: function removeClass(element, className) {
          if (element.classList) element.classList.remove(className);else element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
      }, {
        key: "hasClass",
        value: function hasClass(element, className) {
          if (element.classList) return element.classList.contains(className);else return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
        }
      }, {
        key: "siblings",
        value: function siblings(element) {
          return Array.prototype.filter.call(element.parentNode.children, function (child) {
            return child !== element;
          });
        }
      }, {
        key: "find",
        value: function find(element, selector) {
          return Array.from(element.querySelectorAll(selector));
        }
      }, {
        key: "findSingle",
        value: function findSingle(element, selector) {
          if (element) {
            return element.querySelector(selector);
          }

          return null;
        }
      }, {
        key: "index",
        value: function index(element) {
          var children = element.parentNode.childNodes;
          var num = 0;

          for (var i = 0; i < children.length; i++) {
            if (children[i] == element) return num;
            if (children[i].nodeType == 1) num++;
          }

          return -1;
        }
      }, {
        key: "indexWithinGroup",
        value: function indexWithinGroup(element, attributeName) {
          var children = element.parentNode ? element.parentNode.childNodes : [];
          var num = 0;

          for (var i = 0; i < children.length; i++) {
            if (children[i] == element) return num;
            if (children[i].attributes && children[i].attributes[attributeName] && children[i].nodeType == 1) num++;
          }

          return -1;
        }
      }, {
        key: "relativePosition",
        value: function relativePosition(element, target) {
          var elementDimensions = element.offsetParent ? {
            width: element.offsetWidth,
            height: element.offsetHeight
          } : this.getHiddenElementDimensions(element);
          var targetHeight = target.offsetHeight;
          var targetOffset = target.getBoundingClientRect();
          var viewport = this.getViewport();
          var top, left;

          if (targetOffset.top + targetHeight + elementDimensions.height > viewport.height) {
            top = -1 * elementDimensions.height;
            element.style.transformOrigin = 'bottom';

            if (targetOffset.top + top < 0) {
              top = -1 * targetOffset.top;
            }
          } else {
            top = targetHeight;
            element.style.transformOrigin = 'top';
          }

          if (elementDimensions.width > viewport.width) {
            // element wider then viewport and cannot fit on screen (align at left side of viewport)
            left = targetOffset.left * -1;
          } else if (targetOffset.left + elementDimensions.width > viewport.width) {
            // element wider then viewport but can be fit on screen (align at right side of viewport)
            left = (targetOffset.left + elementDimensions.width - viewport.width) * -1;
          } else {
            // element fits on screen (align with target)
            left = 0;
          }

          element.style.top = top + 'px';
          element.style.left = left + 'px';
        }
      }, {
        key: "absolutePosition",
        value: function absolutePosition(element, target) {
          var elementDimensions = element.offsetParent ? {
            width: element.offsetWidth,
            height: element.offsetHeight
          } : this.getHiddenElementDimensions(element);
          var elementOuterHeight = elementDimensions.height;
          var elementOuterWidth = elementDimensions.width;
          var targetOuterHeight = target.offsetHeight;
          var targetOuterWidth = target.offsetWidth;
          var targetOffset = target.getBoundingClientRect();
          var windowScrollTop = this.getWindowScrollTop();
          var windowScrollLeft = this.getWindowScrollLeft();
          var viewport = this.getViewport();
          var top, left;

          if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
            top = targetOffset.top + windowScrollTop - elementOuterHeight;
            element.style.transformOrigin = 'bottom';

            if (top < 0) {
              top = windowScrollTop;
            }
          } else {
            top = targetOuterHeight + targetOffset.top + windowScrollTop;
            element.style.transformOrigin = 'top';
          }

          if (targetOffset.left + elementOuterWidth > viewport.width) left = Math.max(0, targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth);else left = targetOffset.left + windowScrollLeft;
          element.style.top = top + 'px';
          element.style.left = left + 'px';
        }
      }, {
        key: "getParents",
        value: function getParents(element) {
          var parents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
          return element['parentNode'] === null ? parents : this.getParents(element.parentNode, parents.concat([element.parentNode]));
        }
      }, {
        key: "getScrollableParents",
        value: function getScrollableParents(element) {
          var scrollableParents = [];

          if (element) {
            var parents = this.getParents(element);
            var overflowRegex = /(auto|scroll)/;

            var overflowCheck = function overflowCheck(node) {
              var styleDeclaration = window['getComputedStyle'](node, null);
              return overflowRegex.test(styleDeclaration.getPropertyValue('overflow')) || overflowRegex.test(styleDeclaration.getPropertyValue('overflowX')) || overflowRegex.test(styleDeclaration.getPropertyValue('overflowY'));
            };

            var _iterator3 = _createForOfIteratorHelper(parents),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var parent = _step3.value;
                var scrollSelectors = parent.nodeType === 1 && parent.dataset['scrollselectors'];

                if (scrollSelectors) {
                  var selectors = scrollSelectors.split(',');

                  var _iterator4 = _createForOfIteratorHelper(selectors),
                      _step4;

                  try {
                    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                      var selector = _step4.value;
                      var el = this.findSingle(parent, selector);

                      if (el && overflowCheck(el)) {
                        scrollableParents.push(el);
                      }
                    }
                  } catch (err) {
                    _iterator4.e(err);
                  } finally {
                    _iterator4.f();
                  }
                }

                if (parent.nodeType !== 9 && overflowCheck(parent)) {
                  scrollableParents.push(parent);
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }

          return scrollableParents;
        }
      }, {
        key: "getHiddenElementOuterHeight",
        value: function getHiddenElementOuterHeight(element) {
          element.style.visibility = 'hidden';
          element.style.display = 'block';
          var elementHeight = element.offsetHeight;
          element.style.display = 'none';
          element.style.visibility = 'visible';
          return elementHeight;
        }
      }, {
        key: "getHiddenElementOuterWidth",
        value: function getHiddenElementOuterWidth(element) {
          element.style.visibility = 'hidden';
          element.style.display = 'block';
          var elementWidth = element.offsetWidth;
          element.style.display = 'none';
          element.style.visibility = 'visible';
          return elementWidth;
        }
      }, {
        key: "getHiddenElementDimensions",
        value: function getHiddenElementDimensions(element) {
          var dimensions = {};
          element.style.visibility = 'hidden';
          element.style.display = 'block';
          dimensions.width = element.offsetWidth;
          dimensions.height = element.offsetHeight;
          element.style.display = 'none';
          element.style.visibility = 'visible';
          return dimensions;
        }
      }, {
        key: "scrollInView",
        value: function scrollInView(container, item) {
          var borderTopValue = getComputedStyle(container).getPropertyValue('borderTopWidth');
          var borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
          var paddingTopValue = getComputedStyle(container).getPropertyValue('paddingTop');
          var paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
          var containerRect = container.getBoundingClientRect();
          var itemRect = item.getBoundingClientRect();
          var offset = itemRect.top + document.body.scrollTop - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
          var scroll = container.scrollTop;
          var elementHeight = container.clientHeight;
          var itemHeight = this.getOuterHeight(item);

          if (offset < 0) {
            container.scrollTop = scroll + offset;
          } else if (offset + itemHeight > elementHeight) {
            container.scrollTop = scroll + offset - elementHeight + itemHeight;
          }
        }
      }, {
        key: "fadeIn",
        value: function fadeIn(element, duration) {
          element.style.opacity = 0;
          var last = +new Date();
          var opacity = 0;

          var tick = function tick() {
            opacity = +element.style.opacity.replace(",", ".") + (new Date().getTime() - last) / duration;
            element.style.opacity = opacity;
            last = +new Date();

            if (+opacity < 1) {
              window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16);
            }
          };

          tick();
        }
      }, {
        key: "fadeOut",
        value: function fadeOut(element, ms) {
          var opacity = 1,
              interval = 50,
              duration = ms,
              gap = interval / duration;
          var fading = setInterval(function () {
            opacity = opacity - gap;

            if (opacity <= 0) {
              opacity = 0;
              clearInterval(fading);
            }

            element.style.opacity = opacity;
          }, interval);
        }
      }, {
        key: "getWindowScrollTop",
        value: function getWindowScrollTop() {
          var doc = document.documentElement;
          return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        }
      }, {
        key: "getWindowScrollLeft",
        value: function getWindowScrollLeft() {
          var doc = document.documentElement;
          return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
        }
      }, {
        key: "matches",
        value: function matches(element, selector) {
          var p = Element.prototype;

          var f = p['matches'] || p.webkitMatchesSelector || p['mozMatchesSelector'] || p['msMatchesSelector'] || function (s) {
            return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
          };

          return f.call(element, selector);
        }
      }, {
        key: "getOuterWidth",
        value: function getOuterWidth(el, margin) {
          var width = el.offsetWidth;

          if (margin) {
            var style = getComputedStyle(el);
            width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
          }

          return width;
        }
      }, {
        key: "getHorizontalPadding",
        value: function getHorizontalPadding(el) {
          var style = getComputedStyle(el);
          return parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
        }
      }, {
        key: "getHorizontalMargin",
        value: function getHorizontalMargin(el) {
          var style = getComputedStyle(el);
          return parseFloat(style.marginLeft) + parseFloat(style.marginRight);
        }
      }, {
        key: "innerWidth",
        value: function innerWidth(el) {
          var width = el.offsetWidth;
          var style = getComputedStyle(el);
          width += parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
          return width;
        }
      }, {
        key: "width",
        value: function width(el) {
          var width = el.offsetWidth;
          var style = getComputedStyle(el);
          width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
          return width;
        }
      }, {
        key: "getInnerHeight",
        value: function getInnerHeight(el) {
          var height = el.offsetHeight;
          var style = getComputedStyle(el);
          height += parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
          return height;
        }
      }, {
        key: "getOuterHeight",
        value: function getOuterHeight(el, margin) {
          var height = el.offsetHeight;

          if (margin) {
            var style = getComputedStyle(el);
            height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
          }

          return height;
        }
      }, {
        key: "getHeight",
        value: function getHeight(el) {
          var height = el.offsetHeight;
          var style = getComputedStyle(el);
          height -= parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) + parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
          return height;
        }
      }, {
        key: "getWidth",
        value: function getWidth(el) {
          var width = el.offsetWidth;
          var style = getComputedStyle(el);
          width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight) + parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
          return width;
        }
      }, {
        key: "getViewport",
        value: function getViewport() {
          var win = window,
              d = document,
              e = d.documentElement,
              g = d.getElementsByTagName('body')[0],
              w = win.innerWidth || e.clientWidth || g.clientWidth,
              h = win.innerHeight || e.clientHeight || g.clientHeight;
          return {
            width: w,
            height: h
          };
        }
      }, {
        key: "getOffset",
        value: function getOffset(el) {
          var rect = el.getBoundingClientRect();
          return {
            top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
            left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
          };
        }
      }, {
        key: "replaceElementWith",
        value: function replaceElementWith(element, replacementElement) {
          var parentNode = element.parentNode;
          if (!parentNode) throw "Can't replace element";
          return parentNode.replaceChild(replacementElement, element);
        }
      }, {
        key: "getUserAgent",
        value: function getUserAgent() {
          return navigator.userAgent;
        }
      }, {
        key: "isIE",
        value: function isIE() {
          var ua = window.navigator.userAgent;
          var msie = ua.indexOf('MSIE ');

          if (msie > 0) {
            // IE 10 or older => return version number
            return true;
          }

          var trident = ua.indexOf('Trident/');

          if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            return true;
          }

          var edge = ua.indexOf('Edge/');

          if (edge > 0) {
            // Edge (IE 12+) => return version number
            return true;
          } // other browser


          return false;
        }
      }, {
        key: "isIOS",
        value: function isIOS() {
          return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window['MSStream'];
        }
      }, {
        key: "isAndroid",
        value: function isAndroid() {
          return /(android)/i.test(navigator.userAgent);
        }
      }, {
        key: "appendChild",
        value: function appendChild(element, target) {
          if (this.isElement(target)) target.appendChild(element);else if (target.el && target.el.nativeElement) target.el.nativeElement.appendChild(element);else throw 'Cannot append ' + target + ' to ' + element;
        }
      }, {
        key: "removeChild",
        value: function removeChild(element, target) {
          if (this.isElement(target)) target.removeChild(element);else if (target.el && target.el.nativeElement) target.el.nativeElement.removeChild(element);else throw 'Cannot remove ' + element + ' from ' + target;
        }
      }, {
        key: "removeElement",
        value: function removeElement(element) {
          if (!('remove' in Element.prototype)) element.parentNode.removeChild(element);else element.remove();
        }
      }, {
        key: "isElement",
        value: function isElement(obj) {
          return typeof HTMLElement === "object" ? obj instanceof HTMLElement : obj && typeof obj === "object" && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === "string";
        }
      }, {
        key: "calculateScrollbarWidth",
        value: function calculateScrollbarWidth(el) {
          if (el) {
            var style = getComputedStyle(el);
            return el.offsetWidth - el.clientWidth - parseFloat(style.borderLeftWidth) - parseFloat(style.borderRightWidth);
          } else {
            if (this.calculatedScrollbarWidth !== null) return this.calculatedScrollbarWidth;
            var scrollDiv = document.createElement("div");
            scrollDiv.className = "p-scrollbar-measure";
            document.body.appendChild(scrollDiv);
            var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
            document.body.removeChild(scrollDiv);
            this.calculatedScrollbarWidth = scrollbarWidth;
            return scrollbarWidth;
          }
        }
      }, {
        key: "calculateScrollbarHeight",
        value: function calculateScrollbarHeight() {
          if (this.calculatedScrollbarHeight !== null) return this.calculatedScrollbarHeight;
          var scrollDiv = document.createElement("div");
          scrollDiv.className = "p-scrollbar-measure";
          document.body.appendChild(scrollDiv);
          var scrollbarHeight = scrollDiv.offsetHeight - scrollDiv.clientHeight;
          document.body.removeChild(scrollDiv);
          this.calculatedScrollbarWidth = scrollbarHeight;
          return scrollbarHeight;
        }
      }, {
        key: "invokeElementMethod",
        value: function invokeElementMethod(element, methodName, args) {
          element[methodName].apply(element, args);
        }
      }, {
        key: "clearSelection",
        value: function clearSelection() {
          if (window.getSelection) {
            if (window.getSelection().empty) {
              window.getSelection().empty();
            } else if (window.getSelection().removeAllRanges && window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).getClientRects().length > 0) {
              window.getSelection().removeAllRanges();
            }
          } else if (document['selection'] && document['selection'].empty) {
            try {
              document['selection'].empty();
            } catch (error) {//ignore IE bug
            }
          }
        }
      }, {
        key: "getBrowser",
        value: function getBrowser() {
          if (!this.browser) {
            var matched = this.resolveUserAgent();
            this.browser = {};

            if (matched.browser) {
              this.browser[matched.browser] = true;
              this.browser['version'] = matched.version;
            }

            if (this.browser['chrome']) {
              this.browser['webkit'] = true;
            } else if (this.browser['webkit']) {
              this.browser['safari'] = true;
            }
          }

          return this.browser;
        }
      }, {
        key: "resolveUserAgent",
        value: function resolveUserAgent() {
          var ua = navigator.userAgent.toLowerCase();
          var match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
          return {
            browser: match[1] || "",
            version: match[2] || "0"
          };
        }
      }, {
        key: "isInteger",
        value: function isInteger(value) {
          if (Number.isInteger) {
            return Number.isInteger(value);
          } else {
            return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
          }
        }
      }, {
        key: "isHidden",
        value: function isHidden(element) {
          return element.offsetParent === null;
        }
      }, {
        key: "getFocusableElements",
        value: function getFocusableElements(element) {
          var focusableElements = DomHandler.find(element, "button:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden]),\n                [href][clientHeight][clientWidth]:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden]),\n                input:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden]), select:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden]),\n                textarea:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden]), [tabIndex]:not([tabIndex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden]),\n                [contenteditable]:not([tabIndex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])");
          var visibleFocusableElements = [];

          var _iterator5 = _createForOfIteratorHelper(focusableElements),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var focusableElement = _step5.value;
              if (getComputedStyle(focusableElement).display != "none" && getComputedStyle(focusableElement).visibility != "hidden") visibleFocusableElements.push(focusableElement);
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }

          return visibleFocusableElements;
        }
      }, {
        key: "generateZIndex",
        value: function generateZIndex() {
          this.zindex = this.zindex || 999;
          return ++this.zindex;
        }
      }]);

      return DomHandler;
    }();

    DomHandler.zindex = 1000;
    DomHandler.calculatedScrollbarWidth = null;
    DomHandler.calculatedScrollbarHeight = null;

    var ConnectedOverlayScrollHandler =
    /*#__PURE__*/
    function () {
      function ConnectedOverlayScrollHandler(element) {
        var listener = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

        _classCallCheck(this, ConnectedOverlayScrollHandler);

        this.element = element;
        this.listener = listener;
      }

      _createClass(ConnectedOverlayScrollHandler, [{
        key: "bindScrollListener",
        value: function bindScrollListener() {
          this.scrollableParents = DomHandler.getScrollableParents(this.element);

          for (var i = 0; i < this.scrollableParents.length; i++) {
            this.scrollableParents[i].addEventListener('scroll', this.listener);
          }
        }
      }, {
        key: "unbindScrollListener",
        value: function unbindScrollListener() {
          if (this.scrollableParents) {
            for (var i = 0; i < this.scrollableParents.length; i++) {
              this.scrollableParents[i].removeEventListener('scroll', this.listener);
            }
          }
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this.unbindScrollListener();
          this.element = null;
          this.listener = null;
          this.scrollableParents = null;
        }
      }]);

      return ConnectedOverlayScrollHandler;
    }();
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=primeng-dom.js.map

    /***/

  },

  /***/
  "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-focustrap.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-focustrap.js ***!
    \*************************************************************************/

  /*! exports provided: FocusTrap, FocusTrapModule */

  /***/
  function node_modulesPrimeng__ivy_ngcc__Fesm2015PrimengFocustrapJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FocusTrap", function () {
      return FocusTrap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FocusTrapModule", function () {
      return FocusTrapModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var primeng_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! primeng/dom */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dom.js");

    var FocusTrap =
    /*#__PURE__*/
    function () {
      function FocusTrap(el) {
        _classCallCheck(this, FocusTrap);

        this.el = el;
      }

      _createClass(FocusTrap, [{
        key: "onkeydown",
        value: function onkeydown(e) {
          if (this.pFocusTrapDisabled !== true) {
            e.preventDefault();
            var focusableElements = primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getFocusableElements(this.el.nativeElement);

            if (focusableElements && focusableElements.length > 0) {
              if (!focusableElements[0].ownerDocument.activeElement) {
                focusableElements[0].focus();
              } else {
                var focusedIndex = focusableElements.indexOf(focusableElements[0].ownerDocument.activeElement);

                if (e.shiftKey) {
                  if (focusedIndex == -1 || focusedIndex === 0) focusableElements[focusableElements.length - 1].focus();else focusableElements[focusedIndex - 1].focus();
                } else {
                  if (focusedIndex == -1 || focusedIndex === focusableElements.length - 1) focusableElements[0].focus();else focusableElements[focusedIndex + 1].focus();
                }
              }
            }
          }
        }
      }]);

      return FocusTrap;
    }();

    FocusTrap.ɵfac = function FocusTrap_Factory(t) {
      return new (t || FocusTrap)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    FocusTrap.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: FocusTrap,
      selectors: [["", "pFocusTrap", ""]],
      hostBindings: function FocusTrap_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.tab", function FocusTrap_keydown_tab_HostBindingHandler($event) {
            return ctx.onkeydown($event);
          })("keydown.shift.tab", function FocusTrap_keydown_shift_tab_HostBindingHandler($event) {
            return ctx.onkeydown($event);
          });
        }
      },
      inputs: {
        pFocusTrapDisabled: "pFocusTrapDisabled"
      }
    });

    FocusTrap.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    FocusTrap.propDecorators = {
      pFocusTrapDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      onkeydown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['keydown.tab', ['$event']]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['keydown.shift.tab', ['$event']]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FocusTrap, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[pFocusTrap]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        onkeydown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['keydown.tab', ['$event']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['keydown.shift.tab', ['$event']]
        }],
        pFocusTrapDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    var FocusTrapModule = function FocusTrapModule() {
      _classCallCheck(this, FocusTrapModule);
    };

    FocusTrapModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FocusTrapModule
    });
    FocusTrapModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FocusTrapModule_Factory(t) {
        return new (t || FocusTrapModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FocusTrapModule, {
        declarations: function declarations() {
          return [FocusTrap];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
        },
        exports: function exports() {
          return [FocusTrap];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FocusTrapModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [FocusTrap],
          declarations: [FocusTrap]
        }]
      }], null, null);
    })();
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=primeng-focustrap.js.map

    /***/

  },

  /***/
  "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js ***!
    \*************************************************************************/

  /*! exports provided: InputText, InputTextModule */

  /***/
  function node_modulesPrimeng__ivy_ngcc__Fesm2015PrimengInputtextJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputText", function () {
      return InputText;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputTextModule", function () {
      return InputTextModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var InputText =
    /*#__PURE__*/
    function () {
      function InputText(el, ngModel) {
        _classCallCheck(this, InputText);

        this.el = el;
        this.ngModel = ngModel;
      }

      _createClass(InputText, [{
        key: "ngDoCheck",
        value: function ngDoCheck() {
          this.updateFilledState();
        }
      }, {
        key: "onInput",
        value: function onInput(e) {
          this.updateFilledState();
        }
      }, {
        key: "updateFilledState",
        value: function updateFilledState() {
          this.filled = this.el.nativeElement.value && this.el.nativeElement.value.length || this.ngModel && this.ngModel.model;
        }
      }]);

      return InputText;
    }();

    InputText.ɵfac = function InputText_Factory(t) {
      return new (t || InputText)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], 8));
    };

    InputText.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: InputText,
      selectors: [["", "pInputText", ""]],
      hostVars: 6,
      hostBindings: function InputText_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function InputText_input_HostBindingHandler($event) {
            return ctx.onInput($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-inputtext", true)("p-component", true)("p-filled", ctx.filled);
        }
      }
    });

    InputText.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }];
    };

    InputText.propDecorators = {
      onInput: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['input', ['$event']]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputText, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[pInputText]',
          host: {
            '[class.p-inputtext]': 'true',
            '[class.p-component]': 'true',
            '[class.p-filled]': 'filled'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, {
        onInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['input', ['$event']]
        }]
      });
    })();

    var InputTextModule = function InputTextModule() {
      _classCallCheck(this, InputTextModule);
    };

    InputTextModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: InputTextModule
    });
    InputTextModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function InputTextModule_Factory(t) {
        return new (t || InputTextModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InputTextModule, {
        declarations: function declarations() {
          return [InputText];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]];
        },
        exports: function exports() {
          return [InputText];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputTextModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
          exports: [InputText],
          declarations: [InputText]
        }]
      }], null, null);
    })();
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=primeng-inputtext.js.map

    /***/

  },

  /***/
  "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtextarea.js":
  /*!*****************************************************************************!*\
    !*** ./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtextarea.js ***!
    \*****************************************************************************/

  /*! exports provided: InputTextarea, InputTextareaModule */

  /***/
  function node_modulesPrimeng__ivy_ngcc__Fesm2015PrimengInputtextareaJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputTextarea", function () {
      return InputTextarea;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputTextareaModule", function () {
      return InputTextareaModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var InputTextarea =
    /*#__PURE__*/
    function () {
      function InputTextarea(el, ngModel, control, cd) {
        _classCallCheck(this, InputTextarea);

        this.el = el;
        this.ngModel = ngModel;
        this.control = control;
        this.cd = cd;
        this.onResize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(InputTextarea, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          if (this.ngModel) {
            this.ngModelSubscription = this.ngModel.valueChanges.subscribe(function () {
              _this11.updateState();
            });
          }

          if (this.control) {
            this.ngControlSubscription = this.control.valueChanges.subscribe(function () {
              _this11.updateState();
            });
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (this.autoResize) this.resize();
          this.updateFilledState();
          this.cd.detectChanges();
        }
      }, {
        key: "onInput",
        value: function onInput(e) {
          this.updateState();
        }
      }, {
        key: "updateFilledState",
        value: function updateFilledState() {
          this.filled = this.el.nativeElement.value && this.el.nativeElement.value.length;
        }
      }, {
        key: "onFocus",
        value: function onFocus(e) {
          if (this.autoResize) {
            this.resize(e);
          }
        }
      }, {
        key: "onBlur",
        value: function onBlur(e) {
          if (this.autoResize) {
            this.resize(e);
          }
        }
      }, {
        key: "resize",
        value: function resize(event) {
          this.el.nativeElement.style.height = 'auto';
          this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + 'px';

          if (parseFloat(this.el.nativeElement.style.height) >= parseFloat(this.el.nativeElement.style.maxHeight)) {
            this.el.nativeElement.style.overflowY = "scroll";
            this.el.nativeElement.style.height = this.el.nativeElement.style.maxHeight;
          } else {
            this.el.nativeElement.style.overflow = "hidden";
          }

          this.onResize.emit(event || {});
        }
      }, {
        key: "updateState",
        value: function updateState() {
          this.updateFilledState();

          if (this.autoResize) {
            this.resize();
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.ngModelSubscription) {
            this.ngModelSubscription.unsubscribe();
          }

          if (this.ngControlSubscription) {
            this.ngControlSubscription.unsubscribe();
          }
        }
      }]);

      return InputTextarea;
    }();

    InputTextarea.ɵfac = function InputTextarea_Factory(t) {
      return new (t || InputTextarea)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    InputTextarea.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: InputTextarea,
      selectors: [["", "pInputTextarea", ""]],
      hostVars: 10,
      hostBindings: function InputTextarea_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function InputTextarea_input_HostBindingHandler($event) {
            return ctx.onInput($event);
          })("focus", function InputTextarea_focus_HostBindingHandler($event) {
            return ctx.onFocus($event);
          })("blur", function InputTextarea_blur_HostBindingHandler($event) {
            return ctx.onBlur($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-inputtextarea", true)("p-inputtext", true)("p-component", true)("p-filled", ctx.filled)("p-inputtextarea-resizable", ctx.autoResize);
        }
      },
      inputs: {
        autoResize: "autoResize"
      },
      outputs: {
        onResize: "onResize"
      }
    });

    InputTextarea.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }];
    };

    InputTextarea.propDecorators = {
      autoResize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      onResize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onInput: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['input', ['$event']]
      }],
      onFocus: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['focus', ['$event']]
      }],
      onBlur: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['blur', ['$event']]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputTextarea, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[pInputTextarea]',
          host: {
            '[class.p-inputtextarea]': 'true',
            '[class.p-inputtext]': 'true',
            '[class.p-component]': 'true',
            '[class.p-filled]': 'filled',
            '[class.p-inputtextarea-resizable]': 'autoResize'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, {
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['input', ['$event']]
        }],
        onFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['focus', ['$event']]
        }],
        onBlur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['blur', ['$event']]
        }],
        autoResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    var InputTextareaModule = function InputTextareaModule() {
      _classCallCheck(this, InputTextareaModule);
    };

    InputTextareaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: InputTextareaModule
    });
    InputTextareaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function InputTextareaModule_Factory(t) {
        return new (t || InputTextareaModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InputTextareaModule, {
        declarations: function declarations() {
          return [InputTextarea];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]];
        },
        exports: function exports() {
          return [InputTextarea];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputTextareaModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
          exports: [InputTextarea],
          declarations: [InputTextarea]
        }]
      }], null, null);
    })();
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=primeng-inputtextarea.js.map

    /***/

  },

  /***/
  "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-ripple.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-ripple.js ***!
    \**********************************************************************/

  /*! exports provided: Ripple, RippleModule */

  /***/
  function node_modulesPrimeng__ivy_ngcc__Fesm2015PrimengRippleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Ripple", function () {
      return Ripple;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RippleModule", function () {
      return RippleModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var primeng_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! primeng/dom */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dom.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");

    var Ripple =
    /*#__PURE__*/
    function () {
      function Ripple(el, zone, config) {
        _classCallCheck(this, Ripple);

        this.el = el;
        this.zone = zone;
        this.config = config;
      }

      _createClass(Ripple, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this12 = this;

          if (this.config && this.config.ripple) {
            this.zone.runOutsideAngular(function () {
              _this12.create();

              _this12.mouseDownListener = _this12.onMouseDown.bind(_this12);

              _this12.el.nativeElement.addEventListener('mousedown', _this12.mouseDownListener);
            });
          }
        }
      }, {
        key: "onMouseDown",
        value: function onMouseDown(event) {
          var ink = this.getInk();

          if (!ink || getComputedStyle(ink, null).display === 'none') {
            return;
          }

          primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].removeClass(ink, 'p-ink-active');

          if (!primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getHeight(ink) && !primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getWidth(ink)) {
            var d = Math.max(primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterWidth(this.el.nativeElement), primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterHeight(this.el.nativeElement));
            ink.style.height = d + 'px';
            ink.style.width = d + 'px';
          }

          var offset = primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOffset(this.el.nativeElement);
          var x = event.pageX - offset.left + document.body.scrollTop - primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getWidth(ink) / 2;
          var y = event.pageY - offset.top + document.body.scrollLeft - primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getHeight(ink) / 2;
          ink.style.top = y + 'px';
          ink.style.left = x + 'px';
          primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].addClass(ink, 'p-ink-active');
        }
      }, {
        key: "getInk",
        value: function getInk() {
          for (var i = 0; i < this.el.nativeElement.children.length; i++) {
            if (this.el.nativeElement.children[i].className.indexOf('p-ink') !== -1) {
              return this.el.nativeElement.children[i];
            }
          }

          return null;
        }
      }, {
        key: "resetInk",
        value: function resetInk() {
          var ink = this.getInk();

          if (ink) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].removeClass(ink, 'p-ink-active');
          }
        }
      }, {
        key: "onAnimationEnd",
        value: function onAnimationEnd(event) {
          primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].removeClass(event.currentTarget, 'p-ink-active');
        }
      }, {
        key: "create",
        value: function create() {
          var ink = document.createElement('span');
          ink.className = 'p-ink';
          this.el.nativeElement.appendChild(ink);
          this.animationListener = this.onAnimationEnd.bind(this);
          ink.addEventListener('animationend', this.animationListener);
        }
      }, {
        key: "remove",
        value: function remove() {
          var ink = this.getInk();

          if (ink) {
            this.el.nativeElement.removeEventListener('mousedown', this.mouseDownListener);
            ink.removeEventListener('animationend', this.animationListener);
            primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].removeElement(ink);
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.config && this.config.ripple) {
            this.remove();
          }
        }
      }]);

      return Ripple;
    }();

    Ripple.ɵfac = function Ripple_Factory(t) {
      return new (t || Ripple)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeNGConfig"], 8));
    };

    Ripple.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: Ripple,
      selectors: [["", "pRipple", ""]],
      hostVars: 2,
      hostBindings: function Ripple_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-ripple", true);
        }
      }
    });

    Ripple.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeNGConfig"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ripple, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[pRipple]',
          host: {
            '[class.p-ripple]': 'true'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeNGConfig"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, null);
    })();

    var RippleModule = function RippleModule() {
      _classCallCheck(this, RippleModule);
    };

    RippleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: RippleModule
    });
    RippleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function RippleModule_Factory(t) {
        return new (t || RippleModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RippleModule, {
        declarations: function declarations() {
          return [Ripple];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
        },
        exports: function exports() {
          return [Ripple];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RippleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [Ripple],
          declarations: [Ripple]
        }]
      }], null, null);
    })();
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=primeng-ripple.js.map

    /***/

  },

  /***/
  "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-utils.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-utils.js ***!
    \*********************************************************************/

  /*! exports provided: ObjectUtils, UniqueComponentId, lastId */

  /***/
  function node_modulesPrimeng__ivy_ngcc__Fesm2015PrimengUtilsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ObjectUtils", function () {
      return ObjectUtils;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniqueComponentId", function () {
      return UniqueComponentId;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "lastId", function () {
      return lastId;
    });

    var ObjectUtils =
    /*#__PURE__*/
    function () {
      function ObjectUtils() {
        _classCallCheck(this, ObjectUtils);
      }

      _createClass(ObjectUtils, null, [{
        key: "equals",
        value: function equals(obj1, obj2, field) {
          if (field) return this.resolveFieldData(obj1, field) === this.resolveFieldData(obj2, field);else return this.equalsByValue(obj1, obj2);
        }
      }, {
        key: "equalsByValue",
        value: function equalsByValue(obj1, obj2) {
          if (obj1 === obj2) return true;

          if (obj1 && obj2 && typeof obj1 == 'object' && typeof obj2 == 'object') {
            var arrA = Array.isArray(obj1),
                arrB = Array.isArray(obj2),
                i,
                length,
                key;

            if (arrA && arrB) {
              length = obj1.length;
              if (length != obj2.length) return false;

              for (i = length; i-- !== 0;) {
                if (!this.equalsByValue(obj1[i], obj2[i])) return false;
              }

              return true;
            }

            if (arrA != arrB) return false;
            var dateA = obj1 instanceof Date,
                dateB = obj2 instanceof Date;
            if (dateA != dateB) return false;
            if (dateA && dateB) return obj1.getTime() == obj2.getTime();
            var regexpA = obj1 instanceof RegExp,
                regexpB = obj2 instanceof RegExp;
            if (regexpA != regexpB) return false;
            if (regexpA && regexpB) return obj1.toString() == obj2.toString();
            var keys = Object.keys(obj1);
            length = keys.length;
            if (length !== Object.keys(obj2).length) return false;

            for (i = length; i-- !== 0;) {
              if (!Object.prototype.hasOwnProperty.call(obj2, keys[i])) return false;
            }

            for (i = length; i-- !== 0;) {
              key = keys[i];
              if (!this.equalsByValue(obj1[key], obj2[key])) return false;
            }

            return true;
          }

          return obj1 !== obj1 && obj2 !== obj2;
        }
      }, {
        key: "resolveFieldData",
        value: function resolveFieldData(data, field) {
          if (data && field) {
            if (this.isFunction(field)) {
              return field(data);
            } else if (field.indexOf('.') == -1) {
              return data[field];
            } else {
              var fields = field.split('.');
              var value = data;

              for (var i = 0, len = fields.length; i < len; ++i) {
                if (value == null) {
                  return null;
                }

                value = value[fields[i]];
              }

              return value;
            }
          } else {
            return null;
          }
        }
      }, {
        key: "isFunction",
        value: function isFunction(obj) {
          return !!(obj && obj.constructor && obj.call && obj.apply);
        }
      }, {
        key: "reorderArray",
        value: function reorderArray(value, from, to) {
          var target;

          if (value && from !== to) {
            if (to >= value.length) {
              to %= value.length;
              from %= value.length;
            }

            value.splice(to, 0, value.splice(from, 1)[0]);
          }
        }
      }, {
        key: "insertIntoOrderedArray",
        value: function insertIntoOrderedArray(item, index, arr, sourceArr) {
          if (arr.length > 0) {
            var injected = false;

            for (var i = 0; i < arr.length; i++) {
              var currentItemIndex = this.findIndexInList(arr[i], sourceArr);

              if (currentItemIndex > index) {
                arr.splice(i, 0, item);
                injected = true;
                break;
              }
            }

            if (!injected) {
              arr.push(item);
            }
          } else {
            arr.push(item);
          }
        }
      }, {
        key: "findIndexInList",
        value: function findIndexInList(item, list) {
          var index = -1;

          if (list) {
            for (var i = 0; i < list.length; i++) {
              if (list[i] == item) {
                index = i;
                break;
              }
            }
          }

          return index;
        }
      }, {
        key: "removeAccents",
        value: function removeAccents(str) {
          if (str && str.search(/[\xC0-\xFF]/g) > -1) {
            str = str.replace(/[\xC0-\xC5]/g, "A").replace(/[\xC6]/g, "AE").replace(/[\xC7]/g, "C").replace(/[\xC8-\xCB]/g, "E").replace(/[\xCC-\xCF]/g, "I").replace(/[\xD0]/g, "D").replace(/[\xD1]/g, "N").replace(/[\xD2-\xD6\xD8]/g, "O").replace(/[\xD9-\xDC]/g, "U").replace(/[\xDD]/g, "Y").replace(/[\xDE]/g, "P").replace(/[\xE0-\xE5]/g, "a").replace(/[\xE6]/g, "ae").replace(/[\xE7]/g, "c").replace(/[\xE8-\xEB]/g, "e").replace(/[\xEC-\xEF]/g, "i").replace(/[\xF1]/g, "n").replace(/[\xF2-\xF6\xF8]/g, "o").replace(/[\xF9-\xFC]/g, "u").replace(/[\xFE]/g, "p").replace(/[\xFD\xFF]/g, "y");
          }

          return str;
        }
      }]);

      return ObjectUtils;
    }();

    var lastId = 0;

    function UniqueComponentId() {
      var prefix = 'pr_id_';
      lastId++;
      return "".concat(prefix).concat(lastId);
    }
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=primeng-utils.js.map

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/authentication/authentication/authentication.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/authentication/authentication/authentication.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesAuthenticationAuthenticationAuthenticationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/authentication/login/login.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/authentication/login/login.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesAuthenticationLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"d-flex justify-content-between pcView\">\r\n  <div class=\"d-flex justify-content-center flex-column align-items-end\" *ngIf=\"!isLogging\">\r\n\r\n    <h2 class=\"text-right\">\r\n      {{langvar.Login.formLoginHeader}}\r\n    </h2>\r\n\r\n    <form [formGroup]=\"adminLoginForm\" class=\"mt-2 mr-4\">\r\n\r\n      <div class=\"form-group  my-3 mt-2  \">\r\n        <div class=\"component\">\r\n          <input class=\"form-control\" type=\"text\"  formControlName=\"phoneNumber\" required placeholder=\" {{langvar.Login.PhoneNumber}}\"\r\n                 [ngClass]=\"f.phoneNumber.errors && f.phoneNumber.invalid && f.phoneNumber.dirty  ?'red-border-class':''\">\r\n          <i class=\"fa fa-mobile icon\" aria-hidden=\"true\"></i>\r\n          <!--<div *ngIf=\"f.phoneNumber.invalid && f.phoneNumber.dirty\" class=\"alert alert-danger\" >\r\n            <div *ngIf=\"f.phoneNumber.errors.required\" style=\"text-align: center\">required</div>\r\n            <div *ngIf=\"f.phoneNumber.errors.pattern\" style=\"text-align: center\">pattern</div>\r\n          </div>-->\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group  my-4\">\r\n        <div class=\"component\">\r\n          <input class=\"form-control\" formControlName=\"password\" type=\"{{inputType}}\" required placeholder=\" {{langvar.Login.Password}}\"\r\n                 [ngClass]=\"f.password.errors && f.password.invalid && f.password.dirty  ?'red-border-class':''\">\r\n          <i class=\"fa fa-lock icon\" aria-hidden=\"true\"></i>\r\n          <i class=\"fa fa-eye{{pView}}\" aria-hidden=\"true\" (click)=\"viewPassword()\"></i>\r\n        </div>\r\n      </div>\r\n      <div>\r\n\r\n        <label class=\"container\" >\r\n          <input type=\"checkbox\" [checked]=keepMeBoolean (click)=\"KeepMe($event)\"> <!--[checked]=-->\r\n\r\n          <span class=\"checkmark\" ></span>\r\n          {{langvar.Login.keepMe}}\r\n        </label>\r\n      </div>\r\n      <div class=\"component Inputbutton\">\r\n\r\n        <input class=\"form-control \" type=\"button\" (click)=\"Login()\" value=\"{{langvar.Login.login}}\" [disabled]=\"!adminLoginForm.valid\">\r\n        <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\r\n        <h6 class=\"mt-3 ml-4\"> {{langvar.Login.notUser}} <strong routerLink=\"/auth/register\">{{langvar.Login.register}}</strong>  {{langvar.Login.here}}</h6>\r\n      </div>\r\n      <div class=\"socialIcons mt-4\">\r\n\r\n        <img (click)=\"signInWithGoogle()\" src=\"./assets/icons/google.png\" />\r\n\r\n        <img (click)=\"signInWithFB()\" src=\"./assets/icons/facebook.png\" />\r\n\r\n        <!--<img src=\"./assets/icons/twitter.png\" />-->\r\n      </div>\r\n    </form>\r\n\r\n  </div>\r\n\r\n  <div *ngIf=\"isLogging\" class=\"w-50 text-right\">\r\n    <svg version=\"1.1\" id=\"L4\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"50px\" y=\"50px\"\r\n         viewBox=\"0 0 100 100\" enable-background=\"new 0 0 0 0\" xml:space=\"preserve\">\r\n        <circle fill=\"#1346c6cf\" stroke=\"none\" cx=\"50\" cy=\"50\" r=\"2\">\r\n         <animate attributeName=\"opacity\"\r\n             dur=\"1s\"\r\n             values=\"0;1;0\"\r\n             repeatCount=\"indefinite\"\r\n             begin=\"0.1\" />\r\n\r\n        </circle>\r\n        <circle fill=\"#247DD6\" stroke=\"none\" cx=\"60\" cy=\"50\" r=\"2\">\r\n        <animate attributeName=\"opacity\"\r\n             dur=\"1s\"\r\n             values=\"0;1;0\"\r\n             repeatCount=\"indefinite\"\r\n             begin=\"0.2\" />\r\n         </circle>\r\n         <circle fill=\"#0394F0\" stroke=\"none\" cx=\"70\" cy=\"50\" r=\"2\">\r\n         <animate attributeName=\"opacity\"\r\n             dur=\"1s\"\r\n             values=\"0;1;0\"\r\n             repeatCount=\"indefinite\"\r\n             begin=\"0.3\" />\r\n          </circle>\r\n    </svg>\r\n  </div>\r\n\r\n  <div id=bg>\r\n    <img src=\"./assets/Background/Group1.png\" alt=\"bolt\" />\r\n  </div>\r\n\r\n</div>\r\n\r\n<!--mobile view-->\r\n<div class=\"mobileView\">\r\n  <div id=\"mobileBackground\">\r\n    <img src=\"./assets/logo1.png\" />\r\n    <h3 class=\"ml-3 \">{{langvar.Login.welcome}}</h3>\r\n    <p class=\"ml-3\">{{langvar.Login.formLoginHeader}}</p>\r\n  </div>\r\n\r\n  <div class=\"d-flex justify-content-center h-100\" *ngIf=\"!isLogging\">\r\n    <div class=\"user_card\" >\r\n      <h2 class=\"active\" >{{langvar.Login.login}}</h2>\r\n      <h2 routerLink=\"/auth/register\" >{{langvar.Login.signUp}}</h2>\r\n      <form [formGroup]=\"adminLoginForm\" class=\"mt-2 mr-4\" >\r\n\r\n        <div class=\"form-group  my-3 mt-2  \">\r\n          <div class=\"component\">\r\n            <input class=\"form-control\" type=\"text\" formControlName=\"phoneNumber\" required placeholder=\" {{langvar.Login.PhoneNumber}}\"\r\n                   [ngClass]=\"f.phoneNumber.errors && f.phoneNumber.invalid && f.phoneNumber.dirty  ?'red-border-class':''\">\r\n            <i class=\"fa fa-mobile icon\" aria-hidden=\"true\"></i>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group  my-4\">\r\n          <div class=\"component\">\r\n            <input class=\"form-control\" formControlName=\"password\" type=\"{{inputType}}\" required placeholder=\" {{langvar.Login.Password}}\"\r\n                   [ngClass]=\"f.password.errors && f.password.invalid && f.password.dirty  ?'red-border-class':''\">\r\n            <i class=\"fa fa-lock icon\" aria-hidden=\"true\"></i>\r\n            <i class=\"fa fa-eye{{pView}}\" aria-hidden=\"true\" (click)=\"viewPassword()\"></i>\r\n          </div>\r\n        </div>\r\n        <div>\r\n\r\n          <label class=\"container ml-4\">\r\n            <input type=\"checkbox\" [checked]=keepMeBoolean (click)=\"KeepMe($event)\"> <!--[checked]=-->\r\n            <span class=\"checkmark\"></span>\r\n            {{langvar.Login.keepMe}}\r\n          </label>\r\n        </div>\r\n\r\n      </form>\r\n      <div class=\"d-flex justify-content-center\">\r\n        <div class=\"brand_logo_container\" (click)=\"Login()\" >\r\n          <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n    <div *ngIf=\"isLogging\" class=\"w-100 text-right\">\r\n      <svg version=\"1.1\" id=\"L4\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"50px\" y=\"50px\"\r\n           viewBox=\"0 0 100 100\" enable-background=\"new 0 0 0 0\" xml:space=\"preserve\">\r\n      <circle fill=\"#1346c6cf\" stroke=\"none\" cx=\"30\" cy=\"50\" r=\"4\">\r\n      <animate attributeName=\"opacity\"\r\n               dur=\"1s\"\r\n               values=\"0;1;0\"\r\n               repeatCount=\"indefinite\"\r\n               begin=\"0.1\" />\r\n\r\n        </circle>\r\n      <circle fill=\"#247DD6\" stroke=\"none\" cx=\"50\" cy=\"50\" r=\"4\">\r\n      <animate attributeName=\"opacity\"\r\n               dur=\"1s\"\r\n               values=\"0;1;0\"\r\n               repeatCount=\"indefinite\"\r\n               begin=\"0.2\" />\r\n\r\n         </circle>\r\n      <circle fill=\"#0394F0\" stroke=\"none\" cx=\"70\" cy=\"50\" r=\"4\">\r\n      <animate attributeName=\"opacity\"\r\n               dur=\"1s\"\r\n               values=\"0;1;0\"\r\n               repeatCount=\"indefinite\"\r\n               begin=\"0.3\" />\r\n\r\n          </circle>\r\n       </svg>\r\n    </div>\r\n\r\n  <div class=\"socialIcons mt-4\" *ngIf=\"!isLogging\">\r\n    <img (click)=\"signInWithGoogle()\" src=\"./assets/icons/google.png\" />\r\n\r\n    <img (click)=\"signInWithFB()\" src=\"./assets/icons/facebook.png\" />\r\n    <!--<img src=\"./assets/icons/twitter.png\" />-->\r\n  </div>\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/authentication/signup/signup.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/authentication/signup/signup.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesAuthenticationSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"d-flex justify-content-between pcView\">\r\n  <div class=\"d-flex justify-content-center flex-column align-items-end\">\r\n\r\n    <h2 class=\"text-right\">\r\n      {{langvar.Login.formHeader}}\r\n    </h2>\r\n\r\n    <form [formGroup]=\"signupForm\" class=\"mt-4 mr-5\">\r\n      <div class=\"form-group\">\r\n        <div class=\"component\">\r\n\r\n          <input class=\"form-control\" formControlName=\"userName\" type=\"text\" required placeholder=\" {{langvar.Login.userName}}\"\r\n                      [ngClass]=\"f.userName.errors && f.userName.invalid && f.userName.dirty  ?'red-border-class':''\">\r\n          <i class=\"fa fa-user icon\"></i>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group  my-4  pt-2\">\r\n        <div class=\"component\">\r\n          <input class=\"form-control\" formControlName=\"phoneNumber\" type=\"text\" required placeholder=\" {{langvar.Login.PhoneNumber}}\"\r\n                      [ngClass]=\"f.phoneNumber.errors && f.phoneNumber.invalid && f.phoneNumber.dirty  ?'red-border-class':''\">\r\n          <i class=\"fa fa-mobile icon\" aria-hidden=\"true\"></i>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group  my-4\">\r\n        <div class=\"component\">\r\n\r\n          <input class=\"form-control\" formControlName=\"password\" type=\"{{inputType}}\" required placeholder=\" {{langvar.Login.Password}}\"\r\n                      [ngClass]=\"f.password.errors && f.password.invalid && f.password.dirty  ?'red-border-class':''\">\r\n          <i class=\"fa fa-lock icon\" aria-hidden=\"true\"></i>\r\n          <i class=\"fa fa-eye{{pView}}\" aria-hidden=\"true\" (click)=\"viewPassword()\"></i>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group  my-4\">\r\n        <div class=\"component\">\r\n\r\n          <input class=\"form-control\" formControlName=\"confirmPassword\" type=\"{{inputConfirmType}}\" required placeholder=\" {{langvar.Login.ConfirmPassword}}\"\r\n                      [ngClass]=\"f.confirmPassword.errors && f.confirmPassword.invalid && f.confirmPassword.dirty  ?'red-border-class':''\">\r\n          <i class=\"fa fa-lock icon\" aria-hidden=\"true\"></i>\r\n          <i class=\"fa fa-eye{{pViewConfirmPassword}}\" aria-hidden=\"true\" (click)=\"viewConfirmPassword()\"></i>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"component Inputbutton\">\r\n\r\n        <input class=\"form-control \" type=\"button\" (click)=\"Register()\" value=\"{{langvar.Login.signUp}}\" [disabled]=\"!signupForm.valid\">\r\n\r\n      </div>\r\n      <!--<div class=\"socialIcons mt-4\">\r\n        <img src=\"./assets/icons/google.png\" />\r\n        <img src=\"./assets/icons/facebook.png\" />\r\n        <img src=\"./assets/icons/twitter.png\" />\r\n      </div>-->\r\n    </form>\r\n  </div>\r\n\r\n  <div id=bg>\r\n    <img src=\"./assets/Background/Group1.png\" alt=\"bolt\" />\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n<!--mobile view-->\r\n<div class=\"mobileView\">\r\n  <div id=\"mobileBackground\">\r\n    <img src=\"./assets/logo1.png\" />\r\n    <h3 class=\"ml-3 \">{{langvar.Login.welcome}}</h3>\r\n\r\n    <p class=\"ml-3\">{{langvar.Login.formHeader}}</p>\r\n  </div>\r\n\r\n  <div class=\"d-flex justify-content-center h-100\">\r\n    <div class=\"user_card\">\r\n      <h2 routerLink=\"/auth/login\">{{langvar.Login.login}}</h2>\r\n      <h2 class=\"active\" >{{langvar.Login.signUp}}</h2>\r\n      <form [formGroup]=\"signupForm\" class=\"mt-2 mr-4\">\r\n\r\n        <div class=\"form-group  my-2 mt-5 \">\r\n          <div class=\"component\">\r\n            <input class=\"form-control\"  formControlName=\"userName\"  type=\"text\" required placeholder=\" {{langvar.Login.userName}}\"\r\n                    [ngClass]=\"f.userName.errors && f.userName.invalid && f.userName.dirty  ?'red-border-class':''\">\r\n            <i class=\"fa fa-user icon\"></i>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group  my-2 \">\r\n          <div class=\"component\">\r\n            <input class=\"form-control\" type=\"text\" formControlName=\"phoneNumber\" required placeholder=\" {{langvar.Login.PhoneNumber}}\"\r\n                    [ngClass]=\"f.phoneNumber.errors && f.phoneNumber.invalid && f.phoneNumber.dirty  ?'red-border-class':''\">\r\n            <i class=\"fa fa-mobile icon\" aria-hidden=\"true\"></i>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group  my-2\">\r\n          <div class=\"component\">\r\n            <input class=\"form-control\" formControlName=\"password\" type=\"{{inputType}}\" required placeholder=\" {{langvar.Login.Password}}\"\r\n                    [ngClass]=\"f.password.errors && f.password.invalid &&( f.password.dirty ||f.password.touched) ?'red-border-class':''\">\r\n            <i class=\"fa fa-lock icon\" aria-hidden=\"true\"></i>\r\n            <i class=\"fa fa-eye{{pView}}\" aria-hidden=\"true\" (click)=\"viewPassword()\"></i>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group  my-2\">\r\n          <div class=\"component\">\r\n            <input class=\"form-control\" formControlName=\"confirmPassword\" type=\"{{inputConfirmType}}\" required placeholder=\" {{langvar.Login.ConfirmPassword}}\"\r\n                    [ngClass]=\"f.confirmPassword.errors && f.confirmPassword.invalid && (f.confirmPassword.dirty || f.confirmPassword.toucheed) ?'red-border-class':''\">\r\n            <i class=\"fa fa-lock icon\" aria-hidden=\"true\"></i>\r\n            <i class=\"fa fa-eye{{pViewConfirmPassword}}\" aria-hidden=\"true\" (click)=\"viewConfirmPassword()\"></i>\r\n          </div>\r\n        </div>\r\n      </form>\r\n\r\n      <div class=\"d-flex justify-content-center\">\r\n        <div class=\"brand_logo_container\" (click)=\"Register\">\r\n          <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <!--<div class=\"socialIcons mt-4\">\r\n    <img src=\"./assets/icons/google.png\" />\r\n    <img src=\"./assets/icons/facebook.png\" />\r\n    <img src=\"./assets/icons/twitter.png\" />\r\n  </div>-->\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/modules/authentication/authentication-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/modules/authentication/authentication-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: AuthenticationRoutingModule */

  /***/
  function srcAppModulesAuthenticationAuthenticationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationRoutingModule", function () {
      return AuthenticationRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/modules/authentication/login/login.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/modules/authentication/signup/signup.component.ts");
    /* harmony import */


    var _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./authentication/authentication.component */
    "./src/app/modules/authentication/authentication/authentication.component.ts");

    var routes = [{
      path: '',
      component: _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_5__["AuthenticationComponent"],
      children: [{
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
      }, {
        path: 'register',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]
      }, {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }]
    }];

    var AuthenticationRoutingModule = function AuthenticationRoutingModule() {
      _classCallCheck(this, AuthenticationRoutingModule);
    };

    AuthenticationRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AuthenticationRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/authentication/authentication.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/modules/authentication/authentication.module.ts ***!
    \*****************************************************************/

  /*! exports provided: AuthenticationModule */

  /***/
  function srcAppModulesAuthenticationAuthenticationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function () {
      return AuthenticationModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/modules/authentication/login/login.component.ts");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/inputtext */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");
    /* harmony import */


    var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/inputtextarea */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtextarea.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
    /* harmony import */


    var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./authentication-routing.module */
    "./src/app/modules/authentication/authentication-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var primeng_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! primeng/dialog */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dialog.js");
    /* harmony import */


    var _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./authentication/authentication.component */
    "./src/app/modules/authentication/authentication/authentication.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/modules/shared/shared.module.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/modules/authentication/signup/signup.component.ts");

    var AuthenticationModule = function AuthenticationModule() {
      _classCallCheck(this, AuthenticationModule);
    };

    AuthenticationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_10__["AuthenticationComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignupComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _authentication_routing_module__WEBPACK_IMPORTED_MODULE_7__["AuthenticationRoutingModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__["InputTextModule"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_5__["InputTextareaModule"], primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_9__["DialogModule"]]
    })], AuthenticationModule);
    /***/
  },

  /***/
  "./src/app/modules/authentication/authentication/authentication.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/modules/authentication/authentication/authentication.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesAuthenticationAuthenticationAuthenticationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/authentication/authentication/authentication.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/modules/authentication/authentication/authentication.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: AuthenticationComponent */

  /***/
  function srcAppModulesAuthenticationAuthenticationAuthenticationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationComponent", function () {
      return AuthenticationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AuthenticationComponent =
    /*#__PURE__*/
    function () {
      function AuthenticationComponent() {
        _classCallCheck(this, AuthenticationComponent);
      }

      _createClass(AuthenticationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AuthenticationComponent;
    }();

    AuthenticationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-authentication',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./authentication.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/authentication/authentication/authentication.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./authentication.component.scss */
      "./src/app/modules/authentication/authentication/authentication.component.scss"))["default"]]
    })], AuthenticationComponent);
    /***/
  },

  /***/
  "./src/app/modules/authentication/login/login.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/modules/authentication/login/login.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesAuthenticationLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".pcView {\n  display: flex;\n}\n\n.mobileView {\n  display: none;\n}\n\n#bg img {\n  width: 100%;\n  height: 100vh;\n  -o-object-fit: contain;\n     object-fit: contain;\n  -o-object-position: right;\n     object-position: right;\n}\n\n.component {\n  position: relative;\n}\n\n.red-border-class {\n  /*border: 4px solid red !important;*/\n  box-shadow: 0 0 15px #C5303F !important;\n  -moz-box-shadow: 0 0 15px #C5303F !important;\n  -webkit-box-shadow: 0 0 15px #C5303F !important;\n}\n\n.alert-danger {\n  color: #721c24;\n  background-color: transparent;\n  border-color: transparent;\n  font-size: 11px;\n  font-weight: 500;\n}\n\n.alert {\n  margin-bottom: 0;\n  padding: 0;\n  padding-top: 10px;\n}\n\nh2 {\n  width: 544px;\n  height: 44px;\n  font-family: Roboto;\n  font-size: 28px;\n  text-align: left;\n  color: #acaaaa;\n}\n\n.component:focus {\n  position: relative;\n}\n\n.form-control {\n  border: 2px solid #f7f7f7;\n  height: calc(1.5em + .9rem + 2px);\n  width: 270px;\n  background-color: #f7f7f7;\n  border-radius: 2.25rem;\n  padding-left: 45px;\n  padding-right: 30px;\n  box-shadow: 0 0 10px #acaaaa;\n  -moz-box-shadow: 0 0 10px #acaaaa;\n  -webkit-box-shadow: 0 0 10px #acaaaa;\n}\n\n.fa {\n  position: absolute;\n  color: #acaaaa;\n  top: 11px;\n  left: 18px;\n  font-size: 20px;\n}\n\n.fa-mobile {\n  font-size: 24px;\n}\n\ninput::-webkit-input-placeholder {\n  color: #acaaaa;\n  font-size: 13px !important;\n}\n\ninput::-webkit-input-placeholder {\n  color: #acaaaa;\n  font-size: 13px !important;\n}\n\n.fa-eye-slash, .fa-eye {\n  top: 11px;\n  left: auto;\n  right: 10px;\n  cursor: pointer;\n}\n\n.Inputbutton {\n  box-shadow: none !important;\n  -moz-box-shadow: none !important;\n  -webkit-box-shadow: none !important;\n}\n\n.Inputbutton input {\n  border-radius: 32px;\n  color: #fff;\n  border: none;\n  padding-bottom: 10px;\n  padding-left: 0 !important;\n  height: calc(1.5em + .4rem + 2px);\n  background-image: linear-gradient(to right, #1346c6 3%, #0394f0);\n}\n\n.Inputbutton input:hover {\n  background-image: linear-gradient(to right, #1346c6cf 3%, #0394ffcc);\n}\n\n.Inputbutton input:focus {\n  background-image: linear-gradient(to right, #1346c6cc 3%, #0394ffcc);\n}\n\n.Inputbutton .fa-arrow-right {\n  color: #fff;\n  top: 10px;\n  left: auto;\n  font-size: 14px;\n  right: 10px;\n}\n\n.Inputbutton h6 {\n  font-size: 10px;\n  color: #acaaaa;\n}\n\n.Inputbutton strong {\n  color: #0c6cda;\n  font-size: 11px;\n  cursor: pointer;\n}\n\n.Inputbutton strong:hover {\n  text-decoration: underline;\n}\n\n.socialIcons {\n  text-align: center;\n}\n\n.socialIcons img {\n  width: 45px;\n  margin: 5px;\n  cursor: pointer;\n}\n\n.socialIcons img:hover {\n  opacity: 0.6;\n}\n\n.container {\n  display: block;\n  position: relative;\n  padding-left: 21px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 10px;\n  color: #acaaaa;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  font-family: \"Roboto\", sans-serif;\n}\n\n/* Hide the browser's default checkbox */\n\n.container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n/* Create a custom checkbox */\n\n.checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 15px;\n  width: 15px;\n  border: solid 1px #c9c7c7bb;\n  background-color: #f5f5f5;\n  border-radius: 5px;\n  box-shadow: 0 0 2px #c9c7c7;\n  -moz-box-shadow: 0 0 2px #c9c7c7;\n  -webkit-box-shadow: 0 0 2px #c9c7c7;\n}\n\n/* On mouse-over, add a grey background color */\n\n.container:hover input ~ .checkmark {\n  background-color: #f5f5f5;\n}\n\n/* When the checkbox is checked, add a blue background */\n\n.container input:checked ~ .checkmark {\n  background-image: linear-gradient(to right, #1346c6 3%, #0394f0);\n}\n\n/* Create the checkmark/indicator (hidden when not checked) */\n\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n/* Show the checkmark when checked */\n\n.container input:checked ~ .checkmark:after {\n  display: block;\n}\n\n/* Style the checkmark/indicator */\n\n.container .checkmark:after {\n  left: 5px;\n  top: 2px;\n  width: 5px;\n  height: 9px;\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  transform: rotate(45deg);\n}\n\n@media screen and (max-width: 1024px) {\n  .mobileView {\n    display: block;\n  }\n\n  .pcView {\n    display: none !important;\n  }\n\n  .user_card {\n    top: 25vh;\n    position: absolute;\n    height: 50vh;\n    width: 85vw;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    padding: 10px;\n    border-radius: 8px;\n    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.16);\n    background-color: #ffffff;\n  }\n\n  .brand_logo_container {\n    position: absolute;\n    bottom: -30px;\n    border-radius: 50%;\n    width: 75px;\n    height: 75px;\n    background-image: linear-gradient(to bottom, #195ccf, #5cb5ff);\n    padding: 10px;\n    text-align: center;\n    border: 4px solid white;\n    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\n    text-align: center;\n  }\n\n  .brand_logo_container:hover {\n    background-image: linear-gradient(to bottom, #195ccfcf, #5cb5ffcf);\n  }\n\n  #mobileBackground {\n    background-image: linear-gradient(to bottom, #4d46ff, #5dc0ff);\n    height: 40vh;\n  }\n\n  .fa-arrow-right {\n    color: #fff;\n    bottom: 22px;\n    left: 24px;\n    top: auto;\n    font-size: 24px;\n  }\n\n  h3 {\n    font-family: \"Questrial\", sans-serif;\n    color: #fff;\n    font-size: 8vw;\n    margin-top: 0.5vh;\n  }\n\n  p {\n    font-family: \"Questrial\", sans-serif;\n    color: #fbfbfbcc;\n    font-size: 5vw;\n  }\n\n  .socialIcons {\n    bottom: 1vh;\n    position: absolute;\n    text-align: center;\n    left: 10vw;\n    right: 10vw;\n  }\n  .socialIcons img {\n    width: 16vw;\n  }\n\n  .form-control {\n    height: calc(1.5em + 1.4rem + 2px);\n    width: 80vw;\n    background-color: #fff;\n    border-radius: 2.25rem;\n    padding-left: 45px;\n    box-shadow: none;\n    -moz-box-shadow: none;\n    /* -webkit-box-shadow: 0 0 10px #acaaaa; */\n    border: solid 1px rgba(112, 112, 112, 0.2);\n  }\n\n  .container {\n    color: #1756cd;\n    font-size: 13px;\n    font-weight: 500;\n    margin-left: 17px !important;\n  }\n\n  .checkmark {\n    height: 20px;\n    width: 20px;\n    margin-left: -7px !important;\n  }\n\n  .container .checkmark:after {\n    width: 7px;\n    height: 10px;\n  }\n\n  .active {\n    position: absolute;\n    top: 26px;\n    left: 20px;\n    width: auto;\n    color: #526cff;\n    border-bottom: 4px solid #526cff;\n  }\n\n  h2 {\n    position: absolute;\n    top: 26px;\n    left: 103px;\n    width: auto;\n  }\n\n  .fa-eye, .fa-eye-slash {\n    top: 14px;\n    left: auto;\n    right: -15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hdXRoZW50aWNhdGlvbi9sb2dpbi9OOlxcQ29kZVxcUmVwb3NcXFJlc2VydmF0aW9uLVN5c3RlbVxcUmVzZXJ2YXRpb24tU3lzdGVtL3NyY1xcYXBwXFxtb2R1bGVzXFxhdXRoZW50aWNhdGlvblxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2F1dGhlbnRpY2F0aW9uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREdFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtBQ0FKOztBRElBO0VBQ0Usa0JBQUE7QUNERjs7QURHQTtFQUNFLG9DQUFBO0VBQ0EsdUNBQUE7RUFDQSw0Q0FBQTtFQUNBLCtDQUFBO0FDQUY7O0FERUE7RUFDRSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRENBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURBQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDR0Y7O0FEQUE7RUFDRSxrQkFBQTtBQ0dGOztBREFBO0VBQ0UseUJBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtBQ0dGOztBREFBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDR0Y7O0FEQUE7RUFDRSxlQUFBO0FDR0Y7O0FEQUE7RUFDRSxjQUFBO0VBQ0EsMEJBQUE7QUNHRjs7QURBQTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtBQ0dGOztBRENBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0VGOztBRENBO0VBQ0UsMkJBQUE7RUFDQSxnQ0FBQTtFQUNBLG1DQUFBO0FDRUY7O0FEQUU7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0VBQUE7QUNFSjs7QURDRTtFQUNFLG9FQUFBO0FDQ0o7O0FERUU7RUFDRSxvRUFBQTtBQ0FKOztBREdFO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNESjs7QURJRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDRko7O0FES0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNISjs7QURNRTtFQUNFLDBCQUFBO0FDSko7O0FEUUE7RUFDRSxrQkFBQTtBQ0xGOztBRE9FO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDTEo7O0FEUUU7RUFDRSxZQUFBO0FDTko7O0FEV0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUVBLGlCQUFBO0VBQ0EsaUNBQUE7QUNSRjs7QURVQSx3Q0FBQTs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ1BGOztBRFNBLDZCQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQ0FBQTtFQUNBLG1DQUFBO0FDTkY7O0FEUUEsK0NBQUE7O0FBQ0E7RUFDRSx5QkFBQTtBQ0xGOztBRE9BLHdEQUFBOztBQUNBO0VBQ0UsZ0VBQUE7QUNKRjs7QURNQSw2REFBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNIRjs7QURLQSxvQ0FBQTs7QUFDQTtFQUNFLGNBQUE7QUNGRjs7QURJQSxrQ0FBQTs7QUFDQTtFQUNFLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBR0Esd0JBQUE7QUNERjs7QURLQTtFQUNFO0lBQ0UsY0FBQTtFQ0ZGOztFREtBO0lBQ0Usd0JBQUE7RUNGRjs7RURLQTtJQUNFLFNBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtJQUNBLHVCQUFBO0lBQ0Esc0JBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSw0Q0FBQTtJQUNBLHlCQUFBO0VDRkY7O0VES0E7SUFDRSxrQkFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsOERBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSx1QkFBQTtJQUNBLDJDQUFBO0lBQ0Esa0JBQUE7RUNGRjs7RURLQTtJQUNFLGtFQUFBO0VDRkY7O0VES0E7SUFDRSw4REFBQTtJQUNBLFlBQUE7RUNGRjs7RURLQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtJQUNBLFNBQUE7SUFDQSxlQUFBO0VDRkY7O0VES0E7SUFDRSxvQ0FBQTtJQUNBLFdBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7RUNGRjs7RURJQTtJQUNFLG9DQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0VDREY7O0VER0E7SUFDRSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0VDQUY7RURHRTtJQUNFLFdBQUE7RUNESjs7RURJQTtJQUNFLGtDQUFBO0lBQ0EsV0FBQTtJQUNBLHNCQUFBO0lBQ0Esc0JBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EscUJBQUE7SUFDQSwwQ0FBQTtJQUNBLDBDQUFBO0VDREY7O0VER0E7SUFDRSxjQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsNEJBQUE7RUNBRjs7RURFQTtJQUNFLFlBQUE7SUFDQSxXQUFBO0lBQ0EsNEJBQUE7RUNDRjs7RURDQTtJQUVFLFVBQUE7SUFDQSxZQUFBO0VDQ0Y7O0VERUE7SUFDRSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7SUFDQSxnQ0FBQTtFQ0NGOztFRENBO0lBQ0Usa0JBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7RUNFRjs7RURBQTtJQUNFLFNBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtFQ0dGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2F1dGhlbnRpY2F0aW9uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBjVmlldyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLm1vYmlsZVZpZXcge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbiNiZyB7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICBvYmplY3QtcG9zaXRpb246IHJpZ2h0O1xyXG4gIH1cclxufVxyXG5cclxuLmNvbXBvbmVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5yZWQtYm9yZGVyLWNsYXNzIHtcclxuICAvKmJvcmRlcjogNHB4IHNvbGlkIHJlZCAhaW1wb3J0YW50OyovXHJcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggI0M1MzAzRiAhaW1wb3J0YW50O1xyXG4gIC1tb3otYm94LXNoYWRvdzogMCAwIDE1cHggI0M1MzAzRiAhaW1wb3J0YW50O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDE1cHggI0M1MzAzRiAhaW1wb3J0YW50O1xyXG59XHJcbi5hbGVydC1kYW5nZXIge1xyXG4gIGNvbG9yOiAjNzIxYzI0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLmFsZXJ0e1xyXG4gICAgbWFyZ2luLWJvdHRvbTowO1xyXG4gICAgcGFkZGluZzowO1xyXG4gICAgcGFkZGluZy10b3A6MTBweDtcclxufVxyXG5oMiB7XHJcbiAgd2lkdGg6IDU0NHB4O1xyXG4gIGhlaWdodDogNDRweDtcclxuICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGNvbG9yOiAjYWNhYWFhO1xyXG59XHJcblxyXG4uY29tcG9uZW50OmZvY3VzIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmN2Y3Zjc7XHJcbiAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgLjlyZW0gKyAycHgpO1xyXG4gIHdpZHRoOiAyNzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIuMjVyZW07XHJcbiAgcGFkZGluZy1sZWZ0OiA0NXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggI2FjYWFhYTtcclxuICAtbW96LWJveC1zaGFkb3c6IDAgMCAxMHB4ICNhY2FhYWE7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTBweCAjYWNhYWFhO1xyXG59XHJcblxyXG4uZmEge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb2xvcjogI2FjYWFhYTtcclxuICB0b3A6IDExcHg7XHJcbiAgbGVmdDogMThweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5mYS1tb2JpbGUge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjYWNhYWFhO1xyXG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICNhY2FhYWE7XHJcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uZmEtZXllLXNsYXNoLCAuZmEtZXllIHtcclxuICB0b3A6IDExcHg7XHJcbiAgbGVmdDogYXV0bztcclxuICByaWdodDogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5JbnB1dGJ1dHRvbiB7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gIC1tb3otYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG5cclxuICBpbnB1dCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMnB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgLjRyZW0gKyAycHgpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMTM0NmM2IDMlLCAjMDM5NGYwKTtcclxuICB9XHJcblxyXG4gIGlucHV0OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzEzNDZjNmNmIDMlLCAjMDM5NGZmY2MpO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQ6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMTM0NmM2Y2MgMyUsICMwMzk0ZmZjYyk7XHJcbiAgfVxyXG5cclxuICAuZmEtYXJyb3ctcmlnaHQge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICBoNiB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBjb2xvcjogI2FjYWFhYTtcclxuICB9XHJcblxyXG4gIHN0cm9uZyB7XHJcbiAgICBjb2xvcjogIzBjNmNkYTtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIHN0cm9uZzpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcbn1cclxuXHJcbi5zb2NpYWxJY29ucyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIGltZzpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgfVxyXG59XHJcblxyXG4vL2NoZWNrYm94IHN0eWxlXHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLWxlZnQ6IDIxcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGNvbG9yOiAjYWNhYWFhO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcbi8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IGNoZWNrYm94ICovXHJcbi5jb250YWluZXIgaW5wdXQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBoZWlnaHQ6IDA7XHJcbiAgd2lkdGg6IDA7XHJcbn1cclxuLyogQ3JlYXRlIGEgY3VzdG9tIGNoZWNrYm94ICovXHJcbi5jaGVja21hcmsge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2M5YzdjN2JiO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAycHggI2M5YzdjNztcclxuICAtbW96LWJveC1zaGFkb3c6IDAgMCAycHggI2M5YzdjNztcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAycHggI2M5YzdjNztcclxufVxyXG4vKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgKi9cclxuLmNvbnRhaW5lcjpob3ZlciBpbnB1dCB+IC5jaGVja21hcmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbn1cclxuLyogV2hlbiB0aGUgY2hlY2tib3ggaXMgY2hlY2tlZCwgYWRkIGEgYmx1ZSBiYWNrZ3JvdW5kICovXHJcbi5jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzEzNDZjNiAzJSwgIzAzOTRmMCk7XHJcbn1cclxuLyogQ3JlYXRlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yIChoaWRkZW4gd2hlbiBub3QgY2hlY2tlZCkgKi9cclxuLmNoZWNrbWFyazphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4vKiBTaG93IHRoZSBjaGVja21hcmsgd2hlbiBjaGVja2VkICovXHJcbi5jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi8qIFN0eWxlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yICovXHJcbi5jb250YWluZXIgLmNoZWNrbWFyazphZnRlciB7XHJcbiAgbGVmdDogNXB4O1xyXG4gIHRvcDogMnB4O1xyXG4gIHdpZHRoOiA1cHg7XHJcbiAgaGVpZ2h0OiA5cHg7XHJcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcclxuICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgLm1vYmlsZVZpZXcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAucGNWaWV3IHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC51c2VyX2NhcmQge1xyXG4gICAgdG9wOiAyNXZoO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiA1MHZoO1xyXG4gICAgd2lkdGg6IDg1dnc7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDEycHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcblxyXG4gIC5icmFuZF9sb2dvX2NvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC0zMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDc1cHg7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMTk1Y2NmLCAjNWNiNWZmKTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYnJhbmRfbG9nb19jb250YWluZXI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzE5NWNjZmNmLCAjNWNiNWZmY2YpO1xyXG4gIH1cclxuXHJcbiAgI21vYmlsZUJhY2tncm91bmQge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzRkNDZmZiwgIzVkYzBmZik7XHJcbiAgICBoZWlnaHQ6IDQwdmg7XHJcbiAgfVxyXG5cclxuICAuZmEtYXJyb3ctcmlnaHQge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3R0b206IDIycHg7XHJcbiAgICBsZWZ0OiAyNHB4O1xyXG4gICAgdG9wOiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gIH1cclxuXHJcbiAgaDMge1xyXG4gICAgZm9udC1mYW1pbHk6ICdRdWVzdHJpYWwnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDh2dztcclxuICAgIG1hcmdpbi10b3A6IC41dmg7XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgZm9udC1mYW1pbHk6ICdRdWVzdHJpYWwnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICNmYmZiZmJjYztcclxuICAgIGZvbnQtc2l6ZTogNXZ3O1xyXG4gIH1cclxuICAuc29jaWFsSWNvbnMge1xyXG4gICAgYm90dG9tOiAxdmg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsZWZ0OiAxMHZ3O1xyXG4gICAgcmlnaHQ6IDEwdnc7XHJcblxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxNnZ3O1xyXG4gICAgfVxyXG4gIH1cclxuICAuZm9ybS1jb250cm9sIHtcclxuICAgIGhlaWdodDogY2FsYygxLjVlbSArIDEuNHJlbSArIDJweCk7XHJcbiAgICB3aWR0aDogODB2dztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyLjI1cmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0NXB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogbm9uZTtcclxuICAgIC8qIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDEwcHggI2FjYWFhYTsgKi9cclxuICAgIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMTEyLCAxMTIsIDExMiwgMC4yKTtcclxuICB9XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBjb2xvcjogIzE3NTZjZDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OjUwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5jaGVja21hcmsge1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTdweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuY29udGFpbmVyIC5jaGVja21hcms6YWZ0ZXIge1xyXG5cclxuICAgIHdpZHRoOiA3cHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcblxyXG4gIH1cclxuICAuYWN0aXZle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyNnB4O1xyXG4gICAgbGVmdDogMjBweDtcclxuICAgIHdpZHRoOmF1dG87XHJcbiAgICBjb2xvcjogIzUyNmNmZjtcclxuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjNTI2Y2ZmO1xyXG4gIH1cclxuICBoMiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI2cHg7XHJcbiAgICBsZWZ0OiAxMDNweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gIH1cclxuICAuZmEtZXllLCAuZmEtZXllLXNsYXNoIHtcclxuICAgIHRvcDogMTRweCA7XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgcmlnaHQ6IC0xNXB4O1xyXG4gIH1cclxuICB9XHJcblxyXG4gIFxyXG5cclxuIiwiLnBjVmlldyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5tb2JpbGVWaWV3IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2JnIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBvYmplY3QtcG9zaXRpb246IHJpZ2h0O1xufVxuXG4uY29tcG9uZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucmVkLWJvcmRlci1jbGFzcyB7XG4gIC8qYm9yZGVyOiA0cHggc29saWQgcmVkICFpbXBvcnRhbnQ7Ki9cbiAgYm94LXNoYWRvdzogMCAwIDE1cHggI0M1MzAzRiAhaW1wb3J0YW50O1xuICAtbW96LWJveC1zaGFkb3c6IDAgMCAxNXB4ICNDNTMwM0YgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTVweCAjQzUzMDNGICFpbXBvcnRhbnQ7XG59XG5cbi5hbGVydC1kYW5nZXIge1xuICBjb2xvcjogIzcyMWMyNDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmFsZXJ0IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbmgyIHtcbiAgd2lkdGg6IDU0NHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICNhY2FhYWE7XG59XG5cbi5jb21wb25lbnQ6Zm9jdXMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZjdmN2Y3O1xuICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAuOXJlbSArIDJweCk7XG4gIHdpZHRoOiAyNzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgYm9yZGVyLXJhZGl1czogMi4yNXJlbTtcbiAgcGFkZGluZy1sZWZ0OiA0NXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCAjYWNhYWFhO1xuICAtbW96LWJveC1zaGFkb3c6IDAgMCAxMHB4ICNhY2FhYWE7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDEwcHggI2FjYWFhYTtcbn1cblxuLmZhIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogI2FjYWFhYTtcbiAgdG9wOiAxMXB4O1xuICBsZWZ0OiAxOHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5mYS1tb2JpbGUge1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbmlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNhY2FhYWE7XG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xufVxuXG5pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjYWNhYWFhO1xuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbn1cblxuLmZhLWV5ZS1zbGFzaCwgLmZhLWV5ZSB7XG4gIHRvcDogMTFweDtcbiAgbGVmdDogYXV0bztcbiAgcmlnaHQ6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLklucHV0YnV0dG9uIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAtbW96LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG4uSW5wdXRidXR0b24gaW5wdXQge1xuICBib3JkZXItcmFkaXVzOiAzMnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogY2FsYygxLjVlbSArIC40cmVtICsgMnB4KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMTM0NmM2IDMlLCAjMDM5NGYwKTtcbn1cbi5JbnB1dGJ1dHRvbiBpbnB1dDpob3ZlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzEzNDZjNmNmIDMlLCAjMDM5NGZmY2MpO1xufVxuLklucHV0YnV0dG9uIGlucHV0OmZvY3VzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMTM0NmM2Y2MgMyUsICMwMzk0ZmZjYyk7XG59XG4uSW5wdXRidXR0b24gLmZhLWFycm93LXJpZ2h0IHtcbiAgY29sb3I6ICNmZmY7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogYXV0bztcbiAgZm9udC1zaXplOiAxNHB4O1xuICByaWdodDogMTBweDtcbn1cbi5JbnB1dGJ1dHRvbiBoNiB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNhY2FhYWE7XG59XG4uSW5wdXRidXR0b24gc3Ryb25nIHtcbiAgY29sb3I6ICMwYzZjZGE7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLklucHV0YnV0dG9uIHN0cm9uZzpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uc29jaWFsSWNvbnMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc29jaWFsSWNvbnMgaW1nIHtcbiAgd2lkdGg6IDQ1cHg7XG4gIG1hcmdpbjogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc29jaWFsSWNvbnMgaW1nOmhvdmVyIHtcbiAgb3BhY2l0eTogMC42O1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAyMXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNhY2FhYWE7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4vKiBIaWRlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCBjaGVja2JveCAqL1xuLmNvbnRhaW5lciBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAwO1xufVxuXG4vKiBDcmVhdGUgYSBjdXN0b20gY2hlY2tib3ggKi9cbi5jaGVja21hcmsge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2M5YzdjN2JiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDAgMCAycHggI2M5YzdjNztcbiAgLW1vei1ib3gtc2hhZG93OiAwIDAgMnB4ICNjOWM3Yzc7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDJweCAjYzljN2M3O1xufVxuXG4vKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgKi9cbi5jb250YWluZXI6aG92ZXIgaW5wdXQgfiAuY2hlY2ttYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cblxuLyogV2hlbiB0aGUgY2hlY2tib3ggaXMgY2hlY2tlZCwgYWRkIGEgYmx1ZSBiYWNrZ3JvdW5kICovXG4uY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMTM0NmM2IDMlLCAjMDM5NGYwKTtcbn1cblxuLyogQ3JlYXRlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yIChoaWRkZW4gd2hlbiBub3QgY2hlY2tlZCkgKi9cbi5jaGVja21hcms6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIFNob3cgdGhlIGNoZWNrbWFyayB3aGVuIGNoZWNrZWQgKi9cbi5jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogU3R5bGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKi9cbi5jb250YWluZXIgLmNoZWNrbWFyazphZnRlciB7XG4gIGxlZnQ6IDVweDtcbiAgdG9wOiAycHg7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogOXB4O1xuICBib3JkZXI6IHNvbGlkIHdoaXRlO1xuICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLm1vYmlsZVZpZXcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLnBjVmlldyB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnVzZXJfY2FyZCB7XG4gICAgdG9wOiAyNXZoO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDUwdmg7XG4gICAgd2lkdGg6IDg1dnc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDEycHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIH1cblxuICAuYnJhbmRfbG9nb19jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC0zMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogNzVweDtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzE5NWNjZiwgIzVjYjVmZik7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyOiA0cHggc29saWQgd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuYnJhbmRfbG9nb19jb250YWluZXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMxOTVjY2ZjZiwgIzVjYjVmZmNmKTtcbiAgfVxuXG4gICNtb2JpbGVCYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNGQ0NmZmLCAjNWRjMGZmKTtcbiAgICBoZWlnaHQ6IDQwdmg7XG4gIH1cblxuICAuZmEtYXJyb3ctcmlnaHQge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvdHRvbTogMjJweDtcbiAgICBsZWZ0OiAyNHB4O1xuICAgIHRvcDogYXV0bztcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cblxuICBoMyB7XG4gICAgZm9udC1mYW1pbHk6IFwiUXVlc3RyaWFsXCIsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiA4dnc7XG4gICAgbWFyZ2luLXRvcDogMC41dmg7XG4gIH1cblxuICBwIHtcbiAgICBmb250LWZhbWlseTogXCJRdWVzdHJpYWxcIiwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogI2ZiZmJmYmNjO1xuICAgIGZvbnQtc2l6ZTogNXZ3O1xuICB9XG5cbiAgLnNvY2lhbEljb25zIHtcbiAgICBib3R0b206IDF2aDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxlZnQ6IDEwdnc7XG4gICAgcmlnaHQ6IDEwdnc7XG4gIH1cbiAgLnNvY2lhbEljb25zIGltZyB7XG4gICAgd2lkdGg6IDE2dnc7XG4gIH1cblxuICAuZm9ybS1jb250cm9sIHtcbiAgICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAxLjRyZW0gKyAycHgpO1xuICAgIHdpZHRoOiA4MHZ3O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMi4yNXJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDQ1cHg7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgLyogLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTBweCAjYWNhYWFhOyAqL1xuICAgIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMTEyLCAxMTIsIDExMiwgMC4yKTtcbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIGNvbG9yOiAjMTc1NmNkO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbi1sZWZ0OiAxN3B4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuY2hlY2ttYXJrIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC03cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5jb250YWluZXIgLmNoZWNrbWFyazphZnRlciB7XG4gICAgd2lkdGg6IDdweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gIH1cblxuICAuYWN0aXZlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyNnB4O1xuICAgIGxlZnQ6IDIwcHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgY29sb3I6ICM1MjZjZmY7XG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICM1MjZjZmY7XG4gIH1cblxuICBoMiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjZweDtcbiAgICBsZWZ0OiAxMDNweDtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuXG4gIC5mYS1leWUsIC5mYS1leWUtc2xhc2gge1xuICAgIHRvcDogMTRweDtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiAtMTVweDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/authentication/login/login.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/modules/authentication/login/login.component.ts ***!
    \*****************************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppModulesAuthenticationLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/shared-services/authentication.service */
    "./src/app/services/shared-services/authentication.service.ts");
    /* harmony import */


    var _services_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/shared-services/shared.service */
    "./src/app/services/shared-services/shared.service.ts");
    /* harmony import */


    var _services_utilities_formBuilderHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/utilities/formBuilderHelper */
    "./src/app/services/utilities/formBuilderHelper.ts");
    /* harmony import */


    var _services_utilities_LanguageHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../services/utilities/LanguageHelper */
    "./src/app/services/utilities/LanguageHelper.ts");
    /* harmony import */


    var _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/modal/modal.component */
    "./src/app/modules/shared/modal/modal.component.ts");
    /* harmony import */


    var angularx_social_login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! angularx-social-login */
    "./node_modules/angularx-social-login/__ivy_ngcc__/fesm2015/angularx-social-login.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(router, sharedService, authService, langHelper, formBuilderHelper, socialMediaService) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.sharedService = sharedService;
        this.authService = authService;
        this.langHelper = langHelper;
        this.formBuilderHelper = formBuilderHelper;
        this.socialMediaService = socialMediaService; //handling show/hide password

        this.inputType = "password";
        this.pView = "-slash"; //keep me logged in boolean

        this.keepMeBoolean = false;
        this.isLogging = false;
        this.adminLoginForm = this.formBuilderHelper.createFormBuilder({
          phoneNumber: '',
          password: ''
        });
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.langHelper.ngOnInit();
          this.langvar = this.langHelper.initializeMode();
        }
      }, {
        key: "Login",
        value: function Login() {
          var _this13 = this;

          this.isLogging = true;
          var loginModel = {
            phoneNumber: this.adminLoginForm.controls.phoneNumber.value,
            password: this.adminLoginForm.controls.password.value
          };
          console.log(loginModel);
          this.authService.login(loginModel).subscribe(function (user) {
            //create user account with provided data
            console.log("user", user); // hide loading svg

            _this13.isLogging = false; //save user to keep him logged in

            if (_this13.keepMeBoolean) _this13.authService.setAuth(user.data);

            _this13.router.navigateByUrl('/reservation');
          }, function (error) {
            _this13.isLogging = false;
            console.log("error", error);
          });
        } //trigger change keep me logged in checkbox

      }, {
        key: "KeepMe",
        value: function KeepMe(event) {
          event.target.checked ? this.keepMeBoolean = true : this.keepMeBoolean = false;
        }
      }, {
        key: "SwitchLanguage",
        value: function SwitchLanguage() {}
      }, {
        key: "f",
        get: function get() {
          return this.adminLoginForm.controls;
        } //handling show/hide password

      }, {
        key: "viewPassword",
        value: function viewPassword() {
          if (this.inputType != 'text') {
            this.inputType = 'text';
            this.pView = "";
          } else {
            this.inputType = 'password';
            this.pView = "-slash";
          }
        } //handling signin using google OLD

      }, {
        key: "signInWithFB",
        value: function signInWithFB() {
          var _this14 = this;

          //this.socialService.signInWithFB()
          this.isLogging = true;
          this.socialMediaService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_8__["FacebookLoginProvider"].PROVIDER_ID).then(function (googleUser) {
            console.log(googleUser);

            _this14.authService.FBLogin({
              idToken: googleUser.authToken
            }).subscribe(function (data) {
              console.log(data);
              _this14.isLogging = false;

              _this14.router.navigateByUrl('/reservation');
            });
          });
        } //handling signin using google

      }, {
        key: "signInWithGoogle",
        value: function signInWithGoogle() {
          var _this15 = this;

          this.isLogging = true;
          this.socialMediaService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_8__["GoogleLoginProvider"].PROVIDER_ID).then(function (googleUser) {
            console.log(googleUser);

            _this15.authService.googleLogin({
              idToken: googleUser.idToken
            }).subscribe(function (data) {
              console.log(data);
              _this15.isLogging = false;

              _this15.router.navigateByUrl('/reservation');
            }, function (error) {
              _this15.isLogging = false;
            });
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
      }, {
        type: _services_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _services_utilities_LanguageHelper__WEBPACK_IMPORTED_MODULE_6__["LanguageHelper"]
      }, {
        type: _services_utilities_formBuilderHelper__WEBPACK_IMPORTED_MODULE_5__["formBuilderHelper"]
      }, {
        type: angularx_social_login__WEBPACK_IMPORTED_MODULE_8__["SocialAuthService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_7__["ModalComponent"])], LoginComponent.prototype, "modalComponent", void 0);
    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/authentication/login/login.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/modules/authentication/login/login.component.scss"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/modules/authentication/signup/signup.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/modules/authentication/signup/signup.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesAuthenticationSignupSignupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".pcView {\n  display: flex;\n}\n\n.mobileView {\n  display: none;\n}\n\n.red-border-class {\n  /*border: 4px solid red !important;*/\n  box-shadow: 0 0 15px #C5303F !important;\n  -moz-box-shadow: 0 0 15px #C5303F !important;\n  -webkit-box-shadow: 0 0 15px #C5303F !important;\n}\n\n.alert-danger {\n  color: #721c24;\n  background-color: transparent;\n  border-color: transparent;\n  font-size: 11px;\n  font-weight: 500;\n}\n\n.alert {\n  margin-bottom: 0;\n  padding: 0;\n  padding-top: 10px;\n}\n\n#bg img {\n  width: 100%;\n  height: 100vh;\n  -o-object-fit: contain;\n     object-fit: contain;\n  -o-object-position: right;\n     object-position: right;\n}\n\n.component {\n  position: relative;\n}\n\nh2 {\n  width: 544px;\n  height: 44px;\n  font-family: Roboto;\n  font-size: 28px;\n  text-align: left;\n  color: #acaaaa;\n}\n\n.component:focus {\n  position: relative;\n}\n\n.form-control {\n  border: 2px solid #f7f7f7;\n  height: calc(1.5em + .9rem + 2px);\n  width: 270px;\n  background-color: #f7f7f7;\n  border-radius: 2.25rem;\n  padding-left: 45px;\n  padding-right: 30px;\n  box-shadow: 0 0 10px #acaaaa;\n  -moz-box-shadow: 0 0 10px #acaaaa;\n  -webkit-box-shadow: 0 0 10px #acaaaa;\n}\n\n.fa {\n  position: absolute;\n  color: #acaaaa;\n  top: 11px;\n  left: 18px;\n  font-size: 20px;\n}\n\n.fa-mobile {\n  font-size: 24px;\n}\n\ninput::-webkit-input-placeholder {\n  color: #acaaaa;\n  font-size: 13px !important;\n}\n\ninput::-webkit-input-placeholder {\n  color: #acaaaa;\n  font-size: 13px !important;\n}\n\n.fa-eye-slash, .fa-eye {\n  top: 11px;\n  left: auto;\n  right: 10px;\n  cursor: pointer;\n}\n\n.Inputbutton {\n  border: solid 4px #ffffff;\n  border-radius: 32px;\n}\n\n.Inputbutton input {\n  color: #fff;\n  border: none;\n  padding-bottom: 10px;\n  padding-left: 0 !important;\n  height: calc(1.5em + .4rem + 2px);\n  background-image: linear-gradient(to right, #1346c6 3%, #0394f0);\n}\n\n.Inputbutton input:hover {\n  background-image: linear-gradient(to right, #1346c6cf 3%, #0394ffcc);\n}\n\n.Inputbutton input:focus {\n  background-image: linear-gradient(to right, #1346c6cc 3%, #0394ffcc);\n}\n\n.socialIcons {\n  text-align: center;\n}\n\n.socialIcons img {\n  width: 45px;\n  margin: 5px;\n  cursor: pointer;\n}\n\n@media screen and (max-width: 1024px) {\n  .mobileView {\n    display: block;\n  }\n\n  .pcView {\n    display: none !important;\n  }\n\n  .user_card {\n    top: 26vh;\n    position: absolute;\n    height: 64vh;\n    width: 85vw;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    padding: 10px;\n    border-radius: 8px;\n    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.16);\n    background-color: #ffffff;\n  }\n\n  .brand_logo_container {\n    position: absolute;\n    bottom: -30px;\n    border-radius: 50%;\n    width: 75px;\n    height: 75px;\n    background-image: linear-gradient(to bottom, #195ccf, #5cb5ff);\n    padding: 10px;\n    text-align: center;\n    border: 4px solid white;\n    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\n    text-align: center;\n  }\n\n  .brand_logo_container:hover {\n    background-image: linear-gradient(to bottom, #195ccfcf, #5cb5ffcf);\n  }\n\n  #mobileBackground {\n    background-image: linear-gradient(to bottom, #4d46ff, #5dc0ff);\n    height: 40vh;\n  }\n\n  .fa-arrow-right {\n    color: #fff;\n    bottom: 22px;\n    left: 24px;\n    top: auto;\n    font-size: 24px;\n  }\n\n  h3 {\n    font-family: \"Questrial\", sans-serif;\n    color: #fff;\n    font-size: 8vw;\n    margin-top: 0.5vh;\n  }\n\n  p {\n    font-family: \"Questrial\", sans-serif;\n    color: #fbfbfbcc;\n    font-size: 5vw;\n  }\n\n  .socialIcons {\n    bottom: 1vh;\n    position: absolute;\n    text-align: center;\n    left: 10vw;\n    right: 10vw;\n  }\n  .socialIcons img {\n    width: 16vw;\n  }\n\n  .form-control {\n    height: calc(1.5em + 1.4rem + 2px);\n    width: 80vw;\n    background-color: #fff;\n    border-radius: 2.25rem;\n    padding-left: 45px;\n    box-shadow: none;\n    -moz-box-shadow: none;\n    /* -webkit-box-shadow: 0 0 10px #acaaaa; */\n    border: solid 1px rgba(112, 112, 112, 0.2);\n  }\n\n  .container {\n    color: #1756cd;\n    font-size: 13px;\n    font-weight: 500;\n    margin-left: 17px !important;\n  }\n\n  .checkmark {\n    height: 20px;\n    width: 20px;\n    margin-left: -7px !important;\n  }\n\n  .container .checkmark:after {\n    width: 7px;\n    height: 10px;\n  }\n\n  .active {\n    position: absolute;\n    top: 26px;\n    left: 103px;\n    width: auto;\n    color: #526cff;\n    border-bottom: 4px solid #526cff;\n  }\n\n  h2 {\n    position: absolute;\n    top: 26px;\n    left: 20px;\n    width: auto;\n  }\n\n  .fa-eye, .fa-eye-slash {\n    top: 14px;\n    left: auto;\n    right: -15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hdXRoZW50aWNhdGlvbi9zaWdudXAvTjpcXENvZGVcXFJlcG9zXFxSZXNlcnZhdGlvbi1TeXN0ZW1cXFJlc2VydmF0aW9uLVN5c3RlbS9zcmNcXGFwcFxcbW9kdWxlc1xcYXV0aGVudGljYXRpb25cXHNpZ251cFxcc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2F1dGhlbnRpY2F0aW9uL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxvQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsNENBQUE7RUFDQSwrQ0FBQTtBQ0VGOztBRENBO0VBQ0UsY0FBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNFRjs7QURDQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FDRUY7O0FEQ0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO0FDRUo7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0FDQ0Y7O0FER0E7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQUY7O0FER0E7RUFHSSx5QkFBQTtFQUNBLG1CQUFBO0FDRko7O0FER0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQ0FBQTtFQUNBLGdFQUFBO0FDREo7O0FESUU7RUFDRSxvRUFBQTtBQ0ZKOztBREtFO0VBQ0Usb0VBQUE7QUNISjs7QURNQTtFQUNFLGtCQUFBO0FDSEY7O0FES0U7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNISjs7QURRQTtFQUNFO0lBQ0UsY0FBQTtFQ0xGOztFRFFBO0lBQ0Usd0JBQUE7RUNMRjs7RURRQTtJQUNFLFNBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtJQUNBLHVCQUFBO0lBQ0Esc0JBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSw0Q0FBQTtJQUNBLHlCQUFBO0VDTEY7O0VEUUE7SUFDRSxrQkFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsOERBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSx1QkFBQTtJQUNBLDJDQUFBO0lBQ0Esa0JBQUE7RUNMRjs7RURRQTtJQUNFLGtFQUFBO0VDTEY7O0VEUUE7SUFDRSw4REFBQTtJQUNBLFlBQUE7RUNMRjs7RURRQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtJQUNBLFNBQUE7SUFDQSxlQUFBO0VDTEY7O0VEUUE7SUFDRSxvQ0FBQTtJQUNBLFdBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7RUNMRjs7RURRQTtJQUNFLG9DQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0VDTEY7O0VEUUE7SUFDRSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0VDTEY7RURRRTtJQUNFLFdBQUE7RUNOSjs7RURVQTtJQUNFLGtDQUFBO0lBQ0EsV0FBQTtJQUNBLHNCQUFBO0lBQ0Esc0JBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EscUJBQUE7SUFDQSwwQ0FBQTtJQUNBLDBDQUFBO0VDUEY7O0VEVUE7SUFDRSxjQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsNEJBQUE7RUNQRjs7RURVQTtJQUNFLFlBQUE7SUFDQSxXQUFBO0lBQ0EsNEJBQUE7RUNQRjs7RURVQTtJQUNFLFVBQUE7SUFDQSxZQUFBO0VDUEY7O0VEVUE7SUFDRSxrQkFBQTtJQUNBLFNBQUE7SUFFQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7SUFDQSxnQ0FBQTtFQ1JGOztFRFdBO0lBQ0Usa0JBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7RUNSRjs7RURXQTtJQUNFLFNBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtFQ1JGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2F1dGhlbnRpY2F0aW9uL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGNWaWV3IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ubW9iaWxlVmlldyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ucmVkLWJvcmRlci1jbGFzcyB7XHJcbiAgLypib3JkZXI6IDRweCBzb2xpZCByZWQgIWltcG9ydGFudDsqL1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4ICNDNTMwM0YgIWltcG9ydGFudDtcclxuICAtbW96LWJveC1zaGFkb3c6IDAgMCAxNXB4ICNDNTMwM0YgIWltcG9ydGFudDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAxNXB4ICNDNTMwM0YgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFsZXJ0LWRhbmdlciB7XHJcbiAgY29sb3I6ICM3MjFjMjQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmFsZXJ0IHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuI2JnIHtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgIG9iamVjdC1wb3NpdGlvbjogcmlnaHQ7XHJcbiAgfVxyXG59XHJcblxyXG4uY29tcG9uZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbmgyIHtcclxuICB3aWR0aDogNTQ0cHg7XHJcbiAgaGVpZ2h0OiA0NHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6ICNhY2FhYWE7XHJcbn1cclxuXHJcbi5jb21wb25lbnQ6Zm9jdXMge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2Y3ZjdmNztcclxuICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAuOXJlbSArIDJweCk7XHJcbiAgd2lkdGg6IDI3MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XHJcbiAgYm9yZGVyLXJhZGl1czogMi4yNXJlbTtcclxuICBwYWRkaW5nLWxlZnQ6IDQ1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCAjYWNhYWFhO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMCAwIDEwcHggI2FjYWFhYTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAxMHB4ICNhY2FhYWE7XHJcbn1cclxuXHJcbi5mYSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbG9yOiAjYWNhYWFhO1xyXG4gIHRvcDogMTFweDtcclxuICBsZWZ0OiAxOHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmZhLW1vYmlsZSB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG5pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICNhY2FhYWE7XHJcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogI2FjYWFhYTtcclxuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5mYS1leWUtc2xhc2gsIC5mYS1leWUge1xyXG4gIHRvcDogMTFweDtcclxuICBsZWZ0OiBhdXRvO1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLklucHV0YnV0dG9uIHtcclxuXHJcblxyXG4gICAgYm9yZGVyOiBzb2xpZCA0cHggI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMycHg7XHJcbiAgaW5wdXQge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgLjRyZW0gKyAycHgpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMTM0NmM2IDMlLCAjMDM5NGYwKTtcclxuICB9XHJcblxyXG4gIGlucHV0OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzEzNDZjNmNmIDMlLCAjMDM5NGZmY2MpO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQ6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMTM0NmM2Y2MgMyUsICMwMzk0ZmZjYyk7XHJcbiAgfVxyXG59XHJcbi5zb2NpYWxJY29ucyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAubW9iaWxlVmlldyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC5wY1ZpZXcge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnVzZXJfY2FyZCB7XHJcbiAgICB0b3A6IDI2dmg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDY0dmg7XHJcbiAgICB3aWR0aDogODV2dztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggMTJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuXHJcbiAgLmJyYW5kX2xvZ29fY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogNzVweDtcclxuICAgIGhlaWdodDogNzVweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMxOTVjY2YsICM1Y2I1ZmYpO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5icmFuZF9sb2dvX2NvbnRhaW5lcjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMTk1Y2NmY2YsICM1Y2I1ZmZjZik7XHJcbiAgfVxyXG5cclxuICAjbW9iaWxlQmFja2dyb3VuZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNGQ0NmZmLCAjNWRjMGZmKTtcclxuICAgIGhlaWdodDogNDB2aDtcclxuICB9XHJcblxyXG4gIC5mYS1hcnJvdy1yaWdodCB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvdHRvbTogMjJweDtcclxuICAgIGxlZnQ6IDI0cHg7XHJcbiAgICB0b3A6IGF1dG87XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgICBmb250LWZhbWlseTogJ1F1ZXN0cmlhbCcsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogOHZ3O1xyXG4gICAgbWFyZ2luLXRvcDogLjV2aDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1mYW1pbHk6ICdRdWVzdHJpYWwnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICNmYmZiZmJjYztcclxuICAgIGZvbnQtc2l6ZTogNXZ3O1xyXG4gIH1cclxuXHJcbiAgLnNvY2lhbEljb25zIHtcclxuICAgIGJvdHRvbTogMXZoO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGVmdDogMTB2dztcclxuICAgIHJpZ2h0OiAxMHZ3O1xyXG5cclxuXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTZ2dztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgMS40cmVtICsgMnB4KTtcclxuICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIuMjVyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQ1cHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgLyogLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTBweCAjYWNhYWFhOyAqL1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgxMTIsIDExMiwgMTEyLCAwLjIpO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBjb2xvcjogIzE3NTZjZDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMTdweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmNoZWNrbWFyayB7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtN3B4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyIC5jaGVja21hcms6YWZ0ZXIge1xyXG4gICAgd2lkdGg6IDdweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICB9XHJcblxyXG4gIC5hY3RpdmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyNnB4O1xyXG5cclxuICAgIGxlZnQ6IDEwM3B4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBjb2xvcjogIzUyNmNmZjtcclxuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjNTI2Y2ZmO1xyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyNnB4O1xyXG4gICAgbGVmdDogMjBweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmZhLWV5ZSwgLmZhLWV5ZS1zbGFzaCB7XHJcbiAgICB0b3A6IDE0cHg7XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgcmlnaHQ6IC0xNXB4O1xyXG4gIH1cclxufVxyXG5cclxuICBcclxuIiwiLnBjVmlldyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5tb2JpbGVWaWV3IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnJlZC1ib3JkZXItY2xhc3Mge1xuICAvKmJvcmRlcjogNHB4IHNvbGlkIHJlZCAhaW1wb3J0YW50OyovXG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4ICNDNTMwM0YgIWltcG9ydGFudDtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDAgMTVweCAjQzUzMDNGICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDE1cHggI0M1MzAzRiAhaW1wb3J0YW50O1xufVxuXG4uYWxlcnQtZGFuZ2VyIHtcbiAgY29sb3I6ICM3MjFjMjQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5hbGVydCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4jYmcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIG9iamVjdC1wb3NpdGlvbjogcmlnaHQ7XG59XG5cbi5jb21wb25lbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmgyIHtcbiAgd2lkdGg6IDU0NHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICNhY2FhYWE7XG59XG5cbi5jb21wb25lbnQ6Zm9jdXMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZjdmN2Y3O1xuICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAuOXJlbSArIDJweCk7XG4gIHdpZHRoOiAyNzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgYm9yZGVyLXJhZGl1czogMi4yNXJlbTtcbiAgcGFkZGluZy1sZWZ0OiA0NXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCAjYWNhYWFhO1xuICAtbW96LWJveC1zaGFkb3c6IDAgMCAxMHB4ICNhY2FhYWE7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDEwcHggI2FjYWFhYTtcbn1cblxuLmZhIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogI2FjYWFhYTtcbiAgdG9wOiAxMXB4O1xuICBsZWZ0OiAxOHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5mYS1tb2JpbGUge1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbmlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNhY2FhYWE7XG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xufVxuXG5pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjYWNhYWFhO1xuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbn1cblxuLmZhLWV5ZS1zbGFzaCwgLmZhLWV5ZSB7XG4gIHRvcDogMTFweDtcbiAgbGVmdDogYXV0bztcbiAgcmlnaHQ6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLklucHV0YnV0dG9uIHtcbiAgYm9yZGVyOiBzb2xpZCA0cHggI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcbn1cbi5JbnB1dGJ1dHRvbiBpbnB1dCB7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgLjRyZW0gKyAycHgpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxMzQ2YzYgMyUsICMwMzk0ZjApO1xufVxuLklucHV0YnV0dG9uIGlucHV0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMTM0NmM2Y2YgMyUsICMwMzk0ZmZjYyk7XG59XG4uSW5wdXRidXR0b24gaW5wdXQ6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxMzQ2YzZjYyAzJSwgIzAzOTRmZmNjKTtcbn1cblxuLnNvY2lhbEljb25zIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNvY2lhbEljb25zIGltZyB7XG4gIHdpZHRoOiA0NXB4O1xuICBtYXJnaW46IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLm1vYmlsZVZpZXcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLnBjVmlldyB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnVzZXJfY2FyZCB7XG4gICAgdG9wOiAyNnZoO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDY0dmg7XG4gICAgd2lkdGg6IDg1dnc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDEycHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIH1cblxuICAuYnJhbmRfbG9nb19jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC0zMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogNzVweDtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzE5NWNjZiwgIzVjYjVmZik7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyOiA0cHggc29saWQgd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuYnJhbmRfbG9nb19jb250YWluZXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMxOTVjY2ZjZiwgIzVjYjVmZmNmKTtcbiAgfVxuXG4gICNtb2JpbGVCYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNGQ0NmZmLCAjNWRjMGZmKTtcbiAgICBoZWlnaHQ6IDQwdmg7XG4gIH1cblxuICAuZmEtYXJyb3ctcmlnaHQge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvdHRvbTogMjJweDtcbiAgICBsZWZ0OiAyNHB4O1xuICAgIHRvcDogYXV0bztcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cblxuICBoMyB7XG4gICAgZm9udC1mYW1pbHk6IFwiUXVlc3RyaWFsXCIsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiA4dnc7XG4gICAgbWFyZ2luLXRvcDogMC41dmg7XG4gIH1cblxuICBwIHtcbiAgICBmb250LWZhbWlseTogXCJRdWVzdHJpYWxcIiwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogI2ZiZmJmYmNjO1xuICAgIGZvbnQtc2l6ZTogNXZ3O1xuICB9XG5cbiAgLnNvY2lhbEljb25zIHtcbiAgICBib3R0b206IDF2aDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxlZnQ6IDEwdnc7XG4gICAgcmlnaHQ6IDEwdnc7XG4gIH1cbiAgLnNvY2lhbEljb25zIGltZyB7XG4gICAgd2lkdGg6IDE2dnc7XG4gIH1cblxuICAuZm9ybS1jb250cm9sIHtcbiAgICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAxLjRyZW0gKyAycHgpO1xuICAgIHdpZHRoOiA4MHZ3O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMi4yNXJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDQ1cHg7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgLyogLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTBweCAjYWNhYWFhOyAqL1xuICAgIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMTEyLCAxMTIsIDExMiwgMC4yKTtcbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIGNvbG9yOiAjMTc1NmNkO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbi1sZWZ0OiAxN3B4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuY2hlY2ttYXJrIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC03cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5jb250YWluZXIgLmNoZWNrbWFyazphZnRlciB7XG4gICAgd2lkdGg6IDdweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gIH1cblxuICAuYWN0aXZlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyNnB4O1xuICAgIGxlZnQ6IDEwM3B4O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGNvbG9yOiAjNTI2Y2ZmO1xuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjNTI2Y2ZmO1xuICB9XG5cbiAgaDIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDI2cHg7XG4gICAgbGVmdDogMjBweDtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuXG4gIC5mYS1leWUsIC5mYS1leWUtc2xhc2gge1xuICAgIHRvcDogMTRweDtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiAtMTVweDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/authentication/signup/signup.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/modules/authentication/signup/signup.component.ts ***!
    \*******************************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppModulesAuthenticationSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/shared-services/authentication.service */
    "./src/app/services/shared-services/authentication.service.ts");
    /* harmony import */


    var _services_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/shared-services/shared.service */
    "./src/app/services/shared-services/shared.service.ts");
    /* harmony import */


    var _services_utilities_formBuilderHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/utilities/formBuilderHelper */
    "./src/app/services/utilities/formBuilderHelper.ts");
    /* harmony import */


    var _services_utilities_LanguageHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../services/utilities/LanguageHelper */
    "./src/app/services/utilities/LanguageHelper.ts");

    var SignupComponent =
    /*#__PURE__*/
    function () {
      function SignupComponent(router, sharedService, AuthService, langHelper, formBuilderHelper) {
        _classCallCheck(this, SignupComponent);

        this.router = router;
        this.sharedService = sharedService;
        this.AuthService = AuthService;
        this.langHelper = langHelper;
        this.formBuilderHelper = formBuilderHelper; //handling show/hide password

        this.inputType = "password";
        this.inputConfirmType = "password";
        this.pView = "-slash";
        this.pViewConfirmPassword = "-slash";
        this.isLogging = false;
        this.signupForm = this.formBuilderHelper.CustomizeFormbuilderValidator({
          userName: '',
          phoneNumber: '',
          password: '',
          confirmPassword: ''
        }, this.checkPasswords);
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.langvar = this.langHelper.initializeMode();
        }
      }, {
        key: "Register",
        value: function Register() {
          var _this16 = this;

          this.isLogging = true;
          var model = {
            userName: this.signupForm.controls.userName.value,
            phoneNumber: this.signupForm.controls.phoneNumber.value,
            password: this.signupForm.controls.password.value,
            confirmPassword: this.signupForm.controls.confirmPassword.value
          };
          this.AuthService.CustomerRegistration(model).subscribe(function (user) {
            //this.router.navigateByUrl('services');
            _this16.isLogging = false;

            _this16.router.navigateByUrl('auth/login');
          }, function (error) {
            _this16.isLogging = false;
            console.log("error", error);
          });
        } //handling show/hide password

      }, {
        key: "viewPassword",
        value: function viewPassword() {
          if (this.inputType != 'text') {
            this.inputType = 'text';
            this.pView = "";
          } else {
            this.inputType = 'password';
            this.pView = "-slash";
          }
        }
      }, {
        key: "viewConfirmPassword",
        value: function viewConfirmPassword() {
          if (this.inputConfirmType != 'text') {
            this.inputConfirmType = 'text';
            this.pViewConfirmPassword = "";
          } else {
            this.inputConfirmType = 'password';
            this.pViewConfirmPassword = "-slash";
          }
        } //validate password isEqual confimPassword

      }, {
        key: "checkPasswords",
        value: function checkPasswords(group) {
          var pass = group.get('password').value;
          var confirmPass = group.get('confirmPassword').value;
          return pass === confirmPass ? false : {
            notSame: true
          };
        } //get signUp form controllers

      }, {
        key: "f",
        get: function get() {
          return this.signupForm.controls;
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
      }, {
        type: _services_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _services_utilities_LanguageHelper__WEBPACK_IMPORTED_MODULE_6__["LanguageHelper"]
      }, {
        type: _services_utilities_formBuilderHelper__WEBPACK_IMPORTED_MODULE_5__["formBuilderHelper"]
      }];
    };

    SignupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/authentication/signup/signup.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./signup.component.scss */
      "./src/app/modules/authentication/signup/signup.component.scss"))["default"]]
    })], SignupComponent);
    /***/
  },

  /***/
  "./src/app/services/shared-services/shared.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/services/shared-services/shared.service.ts ***!
    \************************************************************/

  /*! exports provided: SharedService */

  /***/
  function srcAppServicesSharedServicesSharedServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedService", function () {
      return SharedService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SharedService = //Declare variables
    //private var = new BehaviorSubject(true);
    //Observables
    //currentVarStatus = this.var.asObservable();
    function SharedService() {
      _classCallCheck(this, SharedService);
    };

    SharedService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SharedService);
    /***/
  },

  /***/
  "./src/app/services/utilities/formBuilderHelper.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/utilities/formBuilderHelper.ts ***!
    \*********************************************************/

  /*! exports provided: formBuilderHelper */

  /***/
  function srcAppServicesUtilitiesFormBuilderHelperTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "formBuilderHelper", function () {
      return formBuilderHelper;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var formBuilderHelper =
    /*#__PURE__*/
    function () {
      //General form builder controllers and validators
      function formBuilderHelper(formBuilder) {
        _classCallCheck(this, formBuilderHelper);

        this.formBuilder = formBuilder;
        this.controllers = {
          userName: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          firstName: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          nationality: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          password: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$")],
          confirmPassword: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          phoneNumber: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^-?([0-9]\d*)?$/)],
          nationalID: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          email: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          accountNumber: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[0-9]{16}")],
          name: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[A-Za-z]*[\u0600-\u06FF]*$")],
          ewalletAmount: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[0-9]{2,6}")],
          rejectChequeReason: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        };
      } //Create form builder via controller names


      _createClass(formBuilderHelper, [{
        key: "createFormBuilder",
        value: function createFormBuilder(controllerNames) {
          for (var _i2 = 0, _Object$entries = Object.entries(controllerNames); _i2 < _Object$entries.length; _i2++) {
            var entry = _Object$entries[_i2];

            if (this.controllers[entry[0]][0] != '') {
              var x = [entry[1], this.controllers[entry[0]]];
              controllerNames[entry[0]] = x;
            } else controllerNames[entry[0]] = [""];
          }

          return this.formBuilder.group(controllerNames);
        }
      }, {
        key: "CustomizeFormbuilderValidator",
        value: function CustomizeFormbuilderValidator(controllerNames, customValidation) {
          for (var _i3 = 0, _Object$entries2 = Object.entries(controllerNames); _i3 < _Object$entries2.length; _i3++) {
            var entry = _Object$entries2[_i3];
            var x = [entry[1], this.controllers[entry[0]]];
            entry[1] = x;
          }

          return this.formBuilder.group(controllerNames, {
            validator: customValidation
          });
        }
      }]);

      return formBuilderHelper;
    }();

    formBuilderHelper.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    formBuilderHelper = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], formBuilderHelper);
    /***/
  }
}]);
//# sourceMappingURL=modules-authentication-authentication-module-es5.js.map