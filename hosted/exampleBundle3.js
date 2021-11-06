"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var SongContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(SongContainer, _React$Component);

  var _super = _createSuper(SongContainer);

  function SongContainer(props) {
    var _this;

    _classCallCheck(this, SongContainer);

    _this = _super.call(this, props);
    _this.state = {
      songs: props.songs
    };
    _this.loadSongsFromServer = _this.loadSongsFromServer.bind(_assertThisInitialized(_this));

    _this.loadSongsFromServer();

    return _this;
  }

  _createClass(SongContainer, [{
    key: "loadSongsFromServer",
    value: function loadSongsFromServer() {
      var _this2 = this;

      var xhr = new XMLHttpRequest();

      var setSongs = function setSongs() {
        var songResponse = JSON.parse(xhr.response);

        _this2.setState({
          songs: songResponse
        });
      };

      xhr.onload = setSongs;
      xhr.open('GET', '/getSongs');
      xhr.send();
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.songs.length === 0) {
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "No Songs Yet!"));
      }

      var songList = this.state.songs.map(function (song) {
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, song.artist, " - ", /*#__PURE__*/React.createElement("i", null, song.title)));
      });
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "My Favorite Songs"), songList);
    }
  }]);

  return SongContainer;
}(React.Component);

var init = function init() {
  ReactDOM.render( /*#__PURE__*/React.createElement(SongContainer, {
    songs: []
  }), document.getElementById('app'));
};

window.onload = init;
