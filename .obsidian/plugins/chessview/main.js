var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => ChessViewPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian2 = require("obsidian");

// src/types.ts
var DEFAULT_SETTINGS = {
  boardTheme: "brown",
  boardSize: "medium",
  pieceSet: "cburnett",
  notationType: "figurine",
  showCoordinates: true,
  coordinatePosition: "outside",
  lightSquareColor: "#f0d9b5",
  darkSquareColor: "#b58863",
  lastMoveHighlightColor: "rgba(155, 199, 0, 0.41)",
  checkHighlightColor: "rgba(255, 0, 0, 0.5)",
  selectedSquareColor: "rgba(20, 85, 30, 0.5)",
  arrowColor: "rgba(0, 128, 0, 0.8)",
  circleColor: "rgba(0, 128, 0, 0.8)",
  animationSpeed: 200,
  autoPlaySpeed: 1e3,
  showMoveList: true,
  moveListPosition: "right",
  showAnalysisLinks: true,
  defaultOrientation: "auto",
  puzzleShowHints: true,
  puzzleSuccessColor: "#4CAF50",
  puzzleFailColor: "#f44336"
};
var BOARD_THEMES = {
  brown: { light: "#f0d9b5", dark: "#b58863" },
  blue: { light: "#dee3e6", dark: "#8ca2ad" },
  green: { light: "#ffffdd", dark: "#86a666" },
  purple: { light: "#e8e0f0", dark: "#9070a0" },
  gray: { light: "#cccccc", dark: "#888888" },
  wood: { light: "#e8c99b", dark: "#a67d4b" },
  marble: { light: "#f5f5f5", dark: "#a0a0a0" },
  custom: { light: "#f0d9b5", dark: "#b58863" }
};
var BOARD_SIZES = {
  small: { base: 280, label: "Small (280px)" },
  medium: { base: 360, label: "Medium (360px)" },
  large: { base: 480, label: "Large (480px)" },
  auto: { base: 0, label: "Auto (fit container)" }
};
var NAG_DEFINITIONS = [
  { code: "$1", symbol: "!", inlinePgn: "!", label: "Great move", cssClass: "nag-good" },
  { code: "$2", symbol: "?", inlinePgn: "?", label: "Mistake", cssClass: "nag-mistake" },
  { code: "$3", symbol: "!!", inlinePgn: "!!", label: "Brilliant move", cssClass: "nag-brilliant" },
  { code: "$4", symbol: "??", inlinePgn: "??", label: "Blunder", cssClass: "nag-blunder" },
  { code: "$5", symbol: "!?", inlinePgn: "!?", label: "Interesting move", cssClass: "nag-interesting" },
  { code: "$6", symbol: "?!", inlinePgn: "?!", label: "Inaccuracy", cssClass: "nag-inaccuracy" },
  { code: "$7", symbol: "\u25A1", inlinePgn: null, label: "Forced move", cssClass: "nag-forced" },
  { code: "$9", symbol: "\u2715", inlinePgn: null, label: "Miss", cssClass: "nag-miss" },
  { code: "$10", symbol: "=", inlinePgn: null, label: "Equal position", cssClass: "nag-equal" },
  { code: "$13", symbol: "\u221E", inlinePgn: null, label: "Unclear position", cssClass: "nag-unclear" },
  { code: "$14", symbol: "\u2A72", inlinePgn: null, label: "White is slightly better", cssClass: "nag-white-slight" },
  { code: "$15", symbol: "\u2A71", inlinePgn: null, label: "Black is slightly better", cssClass: "nag-black-slight" },
  { code: "$16", symbol: "\xB1", inlinePgn: null, label: "White is better", cssClass: "nag-white-better" },
  { code: "$17", symbol: "\u2213", inlinePgn: null, label: "Black is better", cssClass: "nag-black-better" },
  { code: "$18", symbol: "+\u2212", inlinePgn: null, label: "White is winning", cssClass: "nag-white-winning" },
  { code: "$19", symbol: "\u2212+", inlinePgn: null, label: "Black is winning", cssClass: "nag-black-winning" }
];
var NAG_BY_CODE = (() => {
  const map = {};
  for (const def of NAG_DEFINITIONS) {
    map[def.code] = def;
  }
  return map;
})();
var NAG_BY_INLINE = (() => {
  const map = {};
  for (const def of NAG_DEFINITIONS) {
    if (def.inlinePgn) {
      map[def.inlinePgn] = def;
    }
  }
  return map;
})();
var NAG_BY_SYMBOL = (() => {
  const map = {};
  for (const def of NAG_DEFINITIONS) {
    map[def.symbol] = def;
  }
  return map;
})();
function resolveNag(nag) {
  return NAG_BY_CODE[nag] ?? NAG_BY_INLINE[nag] ?? NAG_BY_SYMBOL[nag];
}
var FIGURINE_NOTATION = {
  K: "\u2654",
  Q: "\u2655",
  R: "\u2656",
  B: "\u2657",
  N: "\u2658",
  k: "\u265A",
  q: "\u265B",
  r: "\u265C",
  b: "\u265D",
  n: "\u265E"
};
var ANNOTATION_COLORS = {
  R: "red",
  G: "green",
  B: "blue",
  Y: "yellow",
  O: "orange",
  P: "purple",
  red: "red",
  green: "green",
  blue: "blue",
  yellow: "yellow",
  orange: "orange",
  purple: "purple"
};
var UI_LABELS = {
  // Navigation
  firstMove: "\u23EE",
  previousMove: "\u25C0",
  nextMove: "\u25B6",
  lastMove: "\u23ED",
  play: "\u25B6",
  pause: "\u23F8",
  flipBoard: "\u21C5",
  // Navigation tooltips
  firstMoveTooltip: "First move (Home)",
  previousMoveTooltip: "Previous move (\u2190)",
  nextMoveTooltip: "Next move (\u2192)",
  lastMoveTooltip: "Last move (End)",
  playTooltip: "Play (space)",
  pauseTooltip: "Pause (space)",
  flipTooltip: "Flip board",
  // Menu
  menuTooltip: "More actions",
  menuCopyPgn: "\u{1F4CB} Copy PGN",
  menuCopyFen: "\u{1F4CB} Copy FEN",
  menuLichess: "\u265E Analyze on Lichess",
  menuChessCom: "\u265F Analyze on Chess.com",
  // Header
  puzzleLabel: "Puzzle",
  ratingPrefix: "Rating: ",
  defaultHeader: "Chess position",
  // Error
  errorTitle: "\u26A0\uFE0F Error",
  errorDetails: "Details",
  errorNoInput: "No input",
  // Puzzle header status
  puzzleHeaderPlaying: (color) => `${color} to move`,
  puzzleHeaderSolved: "\u2713 Solved!",
  puzzleHeaderFailed: "\u2717 Incorrect",
  puzzleHeaderWaiting: "Watch...",
  // Puzzle footer buttons (icon-only with tooltips)
  hintIcon: "\u{1F4A1}",
  hintTooltip: "Hint",
  showSolutionIcon: "\u{1F441}",
  showSolutionTooltip: "Show solution",
  hideSolutionIcon: "\u{1F648}",
  hideSolutionTooltip: "Hide solution",
  retryIcon: "\u21BA",
  retryTooltip: "Retry",
  // Puzzle move list
  solvePuzzle: "Solve the puzzle...",
  movePlaceholder: "...",
  playerWhite: "White",
  playerBlack: "Black"
};
var PUZZLE_OPPONENT_FIRST_MOVE_DELAY = 600;
var PUZZLE_OPPONENT_RESPONSE_DELAY = 400;
var HINT_HIGHLIGHT_DURATION = 2e3;
var COPY_FEEDBACK_DURATION = 2e3;
var COPY_FAILURE_DURATION = 2e3;
var SQUARE_SIZE_PERCENT = 12.5;
var MOVE_LIST_PANEL_WIDTH = 200;

// src/settings.ts
var import_obsidian = require("obsidian");
var ChessViewSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    new import_obsidian.Setting(containerEl).setName("Board appearance").setHeading();
    new import_obsidian.Setting(containerEl).setName("Board theme").setDesc("Choose the color scheme for the board squares").addDropdown(
      (dropdown) => dropdown.addOptions({
        brown: "Brown (classic)",
        blue: "Blue",
        green: "Green",
        purple: "Purple",
        gray: "Gray",
        wood: "Wood",
        marble: "Marble",
        custom: "Custom colors"
      }).setValue(this.plugin.settings.boardTheme).onChange((value) => {
        this.plugin.settings.boardTheme = value;
        if (value !== "custom") {
          const theme = BOARD_THEMES[value];
          if (theme) {
            this.plugin.settings.lightSquareColor = theme.light;
            this.plugin.settings.darkSquareColor = theme.dark;
          }
        }
        void this.plugin.saveSettings();
        this.display();
      })
    );
    if (this.plugin.settings.boardTheme === "custom") {
      new import_obsidian.Setting(containerEl).setName("Light square color").setDesc("Color for light squares").addColorPicker(
        (picker) => picker.setValue(this.plugin.settings.lightSquareColor).onChange((value) => {
          this.plugin.settings.lightSquareColor = value;
          void this.plugin.saveSettings();
        })
      );
      new import_obsidian.Setting(containerEl).setName("Dark square color").setDesc("Color for dark squares").addColorPicker(
        (picker) => picker.setValue(this.plugin.settings.darkSquareColor).onChange((value) => {
          this.plugin.settings.darkSquareColor = value;
          void this.plugin.saveSettings();
        })
      );
    }
    new import_obsidian.Setting(containerEl).setName("Board size").setDesc("Size of the chess board").addDropdown((dropdown) => {
      const options = {};
      for (const [key, val] of Object.entries(BOARD_SIZES)) {
        options[key] = val.label;
      }
      return dropdown.addOptions(options).setValue(this.plugin.settings.boardSize).onChange((value) => {
        this.plugin.settings.boardSize = value;
        void this.plugin.saveSettings();
      });
    });
    new import_obsidian.Setting(containerEl).setName("Piece set").setDesc("Choose the style of chess pieces").addDropdown(
      (dropdown) => dropdown.addOptions({
        cburnett: "Cburnett (default)",
        merida: "Merida",
        alpha: "Alpha",
        pirouetti: "Pirouetti",
        spatial: "Spatial",
        california: "California",
        cardinal: "Cardinal",
        dubrovny: "Dubrovny",
        fantasy: "Fantasy",
        gioco: "Gioco",
        governor: "Governor",
        horsey: "Horsey",
        icpieces: "IC pieces",
        kosal: "Kosal",
        leipzig: "Leipzig",
        maestro: "Maestro",
        staunty: "Staunty",
        tatiana: "Tatiana",
        chess7: "Chess7"
      }).setValue(this.plugin.settings.pieceSet).onChange((value) => {
        this.plugin.settings.pieceSet = value;
        void this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Notation").setHeading();
    new import_obsidian.Setting(containerEl).setName("Move notation style").setDesc("How pieces are displayed in the move list").addDropdown(
      (dropdown) => dropdown.addOptions({
        figurine: "Figurine (\u2658f3, \u2657c4)",
        letter: "Letters (Nf3, Bc4)"
      }).setValue(this.plugin.settings.notationType).onChange((value) => {
        this.plugin.settings.notationType = value;
        void this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Show coordinates").setDesc("Display rank and file labels on the board").addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.showCoordinates).onChange((value) => {
        this.plugin.settings.showCoordinates = value;
        void this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Colors & highlights").setHeading();
    new import_obsidian.Setting(containerEl).setName("Last move highlight").setDesc("Color for highlighting the last move").addColorPicker(
      (picker) => picker.setValue(this.rgbaToHex(this.plugin.settings.lastMoveHighlightColor)).onChange((value) => {
        this.plugin.settings.lastMoveHighlightColor = this.hexToRgba(
          value,
          0.41
        );
        void this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Check highlight").setDesc("Color for highlighting the king in check").addColorPicker(
      (picker) => picker.setValue(this.rgbaToHex(this.plugin.settings.checkHighlightColor)).onChange((value) => {
        this.plugin.settings.checkHighlightColor = this.hexToRgba(
          value,
          0.5
        );
        void this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Default arrow color").setDesc("Default color for arrows when no color is specified").addColorPicker(
      (picker) => picker.setValue(this.rgbaToHex(this.plugin.settings.arrowColor)).onChange((value) => {
        this.plugin.settings.arrowColor = this.hexToRgba(value, 0.8);
        void this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Default circle color").setDesc("Default color for circles when no color is specified").addColorPicker(
      (picker) => picker.setValue(this.rgbaToHex(this.plugin.settings.circleColor)).onChange((value) => {
        this.plugin.settings.circleColor = this.hexToRgba(value, 0.8);
        void this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Behavior").setHeading();
    new import_obsidian.Setting(containerEl).setName("Animation speed").setDesc("Speed of piece movement animation (ms). 0 to disable.").addSlider(
      (slider) => slider.setLimits(0, 500, 50).setValue(this.plugin.settings.animationSpeed).setDynamicTooltip().onChange((value) => {
        this.plugin.settings.animationSpeed = value;
        void this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Autoplay speed").setDesc("Delay between moves during autoplay (ms)").addSlider(
      (slider) => slider.setLimits(200, 3e3, 100).setValue(this.plugin.settings.autoPlaySpeed).setDynamicTooltip().onChange((value) => {
        this.plugin.settings.autoPlaySpeed = value;
        void this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Show move list").setDesc("Display the list of moves alongside the board").addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.showMoveList).onChange((value) => {
        this.plugin.settings.showMoveList = value;
        void this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Move list position").setDesc("Where to display the move list").addDropdown(
      (dropdown) => dropdown.addOptions({
        right: "Right of board",
        bottom: "Below board"
      }).setValue(this.plugin.settings.moveListPosition).onChange((value) => {
        this.plugin.settings.moveListPosition = value;
        void this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Show analysis links").setDesc("Display links to lichess.org and chess.com analysis").addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.showAnalysisLinks).onChange((value) => {
        this.plugin.settings.showAnalysisLinks = value;
        void this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Default board orientation").setDesc("Which side to show at the bottom by default").addDropdown(
      (dropdown) => dropdown.addOptions({
        white: "White",
        black: "Black",
        auto: "Auto (based on side to move)"
      }).setValue(this.plugin.settings.defaultOrientation).onChange((value) => {
        this.plugin.settings.defaultOrientation = value;
        void this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Puzzle mode").setHeading();
    new import_obsidian.Setting(containerEl).setName("Show hints").setDesc("Allow hints in puzzle mode").addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.puzzleShowHints).onChange((value) => {
        this.plugin.settings.puzzleShowHints = value;
        void this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Reset").setHeading();
    new import_obsidian.Setting(containerEl).setName("Reset to defaults").setDesc("Restore all settings to their default values").addButton(
      (button) => button.setButtonText("Reset").setWarning().onClick(() => {
        Object.assign(this.plugin.settings, DEFAULT_SETTINGS);
        void this.plugin.saveSettings();
        this.display();
        new import_obsidian.Notice("Plugin settings reset to defaults");
      })
    );
  }
  rgbaToHex(rgba) {
    const match = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (match) {
      const r = parseInt(match[1]).toString(16).padStart(2, "0");
      const g = parseInt(match[2]).toString(16).padStart(2, "0");
      const b = parseInt(match[3]).toString(16).padStart(2, "0");
      return `#${r}${g}${b}`;
    }
    return rgba.startsWith("#") ? rgba : "#000000";
  }
  hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
};

// node_modules/chess.js/chess.js
var SYMBOLS = "pnbrqkPNBRQK";
var DEFAULT_POSITION = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
var TERMINATION_MARKERS = ["1-0", "0-1", "1/2-1/2", "*"];
var PAWN_OFFSETS = {
  b: [16, 32, 17, 15],
  w: [-16, -32, -17, -15]
};
var PIECE_OFFSETS = {
  n: [-18, -33, -31, -14, 18, 33, 31, 14],
  b: [-17, -15, 17, 15],
  r: [-16, 1, 16, -1],
  q: [-17, -16, -15, 1, 17, 16, 15, -1],
  k: [-17, -16, -15, 1, 17, 16, 15, -1]
};
var ATTACKS = [
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  24,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  2,
  24,
  2,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  53,
  56,
  53,
  2,
  0,
  0,
  0,
  0,
  0,
  0,
  24,
  24,
  24,
  24,
  24,
  24,
  56,
  0,
  56,
  24,
  24,
  24,
  24,
  24,
  24,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  53,
  56,
  53,
  2,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  2,
  24,
  2,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  24,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  0,
  0,
  20
];
var RAYS = [
  17,
  0,
  0,
  0,
  0,
  0,
  0,
  16,
  0,
  0,
  0,
  0,
  0,
  0,
  15,
  0,
  0,
  17,
  0,
  0,
  0,
  0,
  0,
  16,
  0,
  0,
  0,
  0,
  0,
  15,
  0,
  0,
  0,
  0,
  17,
  0,
  0,
  0,
  0,
  16,
  0,
  0,
  0,
  0,
  15,
  0,
  0,
  0,
  0,
  0,
  0,
  17,
  0,
  0,
  0,
  16,
  0,
  0,
  0,
  15,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  17,
  0,
  0,
  16,
  0,
  0,
  15,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  17,
  0,
  16,
  0,
  15,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  17,
  16,
  15,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  -15,
  -16,
  -17,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  -15,
  0,
  -16,
  0,
  -17,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  -15,
  0,
  0,
  -16,
  0,
  0,
  -17,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  -15,
  0,
  0,
  0,
  -16,
  0,
  0,
  0,
  -17,
  0,
  0,
  0,
  0,
  0,
  0,
  -15,
  0,
  0,
  0,
  0,
  -16,
  0,
  0,
  0,
  0,
  -17,
  0,
  0,
  0,
  0,
  -15,
  0,
  0,
  0,
  0,
  0,
  -16,
  0,
  0,
  0,
  0,
  0,
  -17,
  0,
  0,
  -15,
  0,
  0,
  0,
  0,
  0,
  0,
  -16,
  0,
  0,
  0,
  0,
  0,
  0,
  -17
];
var SHIFTS = { p: 0, n: 1, b: 2, r: 3, q: 4, k: 5 };
var BITS = {
  NORMAL: 1,
  CAPTURE: 2,
  BIG_PAWN: 4,
  EP_CAPTURE: 8,
  PROMOTION: 16,
  KSIDE_CASTLE: 32,
  QSIDE_CASTLE: 64
};
var RANK_1 = 7;
var RANK_2 = 6;
var RANK_7 = 1;
var RANK_8 = 0;
var SQUARE_MAP = {
  a8: 0,
  b8: 1,
  c8: 2,
  d8: 3,
  e8: 4,
  f8: 5,
  g8: 6,
  h8: 7,
  a7: 16,
  b7: 17,
  c7: 18,
  d7: 19,
  e7: 20,
  f7: 21,
  g7: 22,
  h7: 23,
  a6: 32,
  b6: 33,
  c6: 34,
  d6: 35,
  e6: 36,
  f6: 37,
  g6: 38,
  h6: 39,
  a5: 48,
  b5: 49,
  c5: 50,
  d5: 51,
  e5: 52,
  f5: 53,
  g5: 54,
  h5: 55,
  a4: 64,
  b4: 65,
  c4: 66,
  d4: 67,
  e4: 68,
  f4: 69,
  g4: 70,
  h4: 71,
  a3: 80,
  b3: 81,
  c3: 82,
  d3: 83,
  e3: 84,
  f3: 85,
  g3: 86,
  h3: 87,
  a2: 96,
  b2: 97,
  c2: 98,
  d2: 99,
  e2: 100,
  f2: 101,
  g2: 102,
  h2: 103,
  a1: 112,
  b1: 113,
  c1: 114,
  d1: 115,
  e1: 116,
  f1: 117,
  g1: 118,
  h1: 119
};
var ROOKS = {
  w: [
    { square: SQUARE_MAP.a1, flag: BITS.QSIDE_CASTLE },
    { square: SQUARE_MAP.h1, flag: BITS.KSIDE_CASTLE }
  ],
  b: [
    { square: SQUARE_MAP.a8, flag: BITS.QSIDE_CASTLE },
    { square: SQUARE_MAP.h8, flag: BITS.KSIDE_CASTLE }
  ]
};
var PARSER_STRICT = 0;
var PARSER_SLOPPY = 1;
function get_disambiguator(move3, moves) {
  var from = move3.from;
  var to = move3.to;
  var piece = move3.piece;
  var ambiguities = 0;
  var same_rank = 0;
  var same_file = 0;
  for (var i = 0, len = moves.length; i < len; i++) {
    var ambig_from = moves[i].from;
    var ambig_to = moves[i].to;
    var ambig_piece = moves[i].piece;
    if (piece === ambig_piece && from !== ambig_from && to === ambig_to) {
      ambiguities++;
      if (rank(from) === rank(ambig_from)) {
        same_rank++;
      }
      if (file(from) === file(ambig_from)) {
        same_file++;
      }
    }
  }
  if (ambiguities > 0) {
    if (same_rank > 0 && same_file > 0) {
      return algebraic(from);
    } else if (same_file > 0) {
      return algebraic(from).charAt(1);
    } else {
      return algebraic(from).charAt(0);
    }
  }
  return "";
}
function infer_piece_type(san) {
  var piece_type = san.charAt(0);
  if (piece_type >= "a" && piece_type <= "h") {
    var matches = san.match(/[a-h]\d.*[a-h]\d/);
    if (matches) {
      return void 0;
    }
    return PAWN;
  }
  piece_type = piece_type.toLowerCase();
  if (piece_type === "o") {
    return KING;
  }
  return piece_type;
}
function stripped_san(move3) {
  return move3.replace(/=/, "").replace(/[+#]?[?!]*$/, "");
}
function rank(i) {
  return i >> 4;
}
function file(i) {
  return i & 15;
}
function algebraic(i) {
  var f = file(i), r = rank(i);
  return "abcdefgh".substring(f, f + 1) + "87654321".substring(r, r + 1);
}
function swap_color(c) {
  return c === WHITE ? BLACK : WHITE;
}
function is_digit(c) {
  return "0123456789".indexOf(c) !== -1;
}
function clone(obj) {
  var dupe = obj instanceof Array ? [] : {};
  for (var property in obj) {
    if (typeof property === "object") {
      dupe[property] = clone(obj[property]);
    } else {
      dupe[property] = obj[property];
    }
  }
  return dupe;
}
function trim(str) {
  return str.replace(/^\s+|\s+$/g, "");
}
var BLACK = "b";
var WHITE = "w";
var EMPTY = -1;
var PAWN = "p";
var KNIGHT = "n";
var BISHOP = "b";
var ROOK = "r";
var QUEEN = "q";
var KING = "k";
var SQUARES = function() {
  var keys = [];
  for (var i = SQUARE_MAP.a8; i <= SQUARE_MAP.h1; i++) {
    if (i & 136) {
      i += 7;
      continue;
    }
    keys.push(algebraic(i));
  }
  return keys;
}();
var FLAGS = {
  NORMAL: "n",
  CAPTURE: "c",
  BIG_PAWN: "b",
  EP_CAPTURE: "e",
  PROMOTION: "p",
  KSIDE_CASTLE: "k",
  QSIDE_CASTLE: "q"
};
var Chess = function(fen) {
  var board = new Array(128);
  var kings = { w: EMPTY, b: EMPTY };
  var turn = WHITE;
  var castling = { w: 0, b: 0 };
  var ep_square = EMPTY;
  var half_moves = 0;
  var move_number = 1;
  var history = [];
  var header = {};
  var comments = {};
  if (typeof fen === "undefined") {
    load(DEFAULT_POSITION);
  } else {
    load(fen);
  }
  function clear2(keep_headers) {
    if (typeof keep_headers === "undefined") {
      keep_headers = false;
    }
    board = new Array(128);
    kings = { w: EMPTY, b: EMPTY };
    turn = WHITE;
    castling = { w: 0, b: 0 };
    ep_square = EMPTY;
    half_moves = 0;
    move_number = 1;
    history = [];
    if (!keep_headers)
      header = {};
    comments = {};
    update_setup(generate_fen());
  }
  function prune_comments() {
    var reversed_history = [];
    var current_comments = {};
    var copy_comment = function(fen2) {
      if (fen2 in comments) {
        current_comments[fen2] = comments[fen2];
      }
    };
    while (history.length > 0) {
      reversed_history.push(undo_move());
    }
    copy_comment(generate_fen());
    while (reversed_history.length > 0) {
      make_move(reversed_history.pop());
      copy_comment(generate_fen());
    }
    comments = current_comments;
  }
  function reset() {
    load(DEFAULT_POSITION);
  }
  function load(fen2, keep_headers) {
    if (typeof keep_headers === "undefined") {
      keep_headers = false;
    }
    var tokens = fen2.split(/\s+/);
    var position = tokens[0];
    var square = 0;
    if (!validate_fen(fen2).valid) {
      return false;
    }
    clear2(keep_headers);
    for (var i = 0; i < position.length; i++) {
      var piece = position.charAt(i);
      if (piece === "/") {
        square += 8;
      } else if (is_digit(piece)) {
        square += parseInt(piece, 10);
      } else {
        var color = piece < "a" ? WHITE : BLACK;
        put({ type: piece.toLowerCase(), color }, algebraic(square));
        square++;
      }
    }
    turn = tokens[1];
    if (tokens[2].indexOf("K") > -1) {
      castling.w |= BITS.KSIDE_CASTLE;
    }
    if (tokens[2].indexOf("Q") > -1) {
      castling.w |= BITS.QSIDE_CASTLE;
    }
    if (tokens[2].indexOf("k") > -1) {
      castling.b |= BITS.KSIDE_CASTLE;
    }
    if (tokens[2].indexOf("q") > -1) {
      castling.b |= BITS.QSIDE_CASTLE;
    }
    ep_square = tokens[3] === "-" ? EMPTY : SQUARE_MAP[tokens[3]];
    half_moves = parseInt(tokens[4], 10);
    move_number = parseInt(tokens[5], 10);
    update_setup(generate_fen());
    return true;
  }
  function validate_fen(fen2) {
    var errors = {
      0: "No errors.",
      1: "FEN string must contain six space-delimited fields.",
      2: "6th field (move number) must be a positive integer.",
      3: "5th field (half move counter) must be a non-negative integer.",
      4: "4th field (en-passant square) is invalid.",
      5: "3rd field (castling availability) is invalid.",
      6: "2nd field (side to move) is invalid.",
      7: "1st field (piece positions) does not contain 8 '/'-delimited rows.",
      8: "1st field (piece positions) is invalid [consecutive numbers].",
      9: "1st field (piece positions) is invalid [invalid piece].",
      10: "1st field (piece positions) is invalid [row too large].",
      11: "Illegal en-passant square"
    };
    var tokens = fen2.split(/\s+/);
    if (tokens.length !== 6) {
      return { valid: false, error_number: 1, error: errors[1] };
    }
    if (isNaN(parseInt(tokens[5])) || parseInt(tokens[5], 10) <= 0) {
      return { valid: false, error_number: 2, error: errors[2] };
    }
    if (isNaN(parseInt(tokens[4])) || parseInt(tokens[4], 10) < 0) {
      return { valid: false, error_number: 3, error: errors[3] };
    }
    if (!/^(-|[abcdefgh][36])$/.test(tokens[3])) {
      return { valid: false, error_number: 4, error: errors[4] };
    }
    if (!/^(KQ?k?q?|Qk?q?|kq?|q|-)$/.test(tokens[2])) {
      return { valid: false, error_number: 5, error: errors[5] };
    }
    if (!/^(w|b)$/.test(tokens[1])) {
      return { valid: false, error_number: 6, error: errors[6] };
    }
    var rows = tokens[0].split("/");
    if (rows.length !== 8) {
      return { valid: false, error_number: 7, error: errors[7] };
    }
    for (var i = 0; i < rows.length; i++) {
      var sum_fields = 0;
      var previous_was_number = false;
      for (var k = 0; k < rows[i].length; k++) {
        if (!isNaN(rows[i][k])) {
          if (previous_was_number) {
            return { valid: false, error_number: 8, error: errors[8] };
          }
          sum_fields += parseInt(rows[i][k], 10);
          previous_was_number = true;
        } else {
          if (!/^[prnbqkPRNBQK]$/.test(rows[i][k])) {
            return { valid: false, error_number: 9, error: errors[9] };
          }
          sum_fields += 1;
          previous_was_number = false;
        }
      }
      if (sum_fields !== 8) {
        return { valid: false, error_number: 10, error: errors[10] };
      }
    }
    if (tokens[3][1] == "3" && tokens[1] == "w" || tokens[3][1] == "6" && tokens[1] == "b") {
      return { valid: false, error_number: 11, error: errors[11] };
    }
    return { valid: true, error_number: 0, error: errors[0] };
  }
  function generate_fen() {
    var empty = 0;
    var fen2 = "";
    for (var i = SQUARE_MAP.a8; i <= SQUARE_MAP.h1; i++) {
      if (board[i] == null) {
        empty++;
      } else {
        if (empty > 0) {
          fen2 += empty;
          empty = 0;
        }
        var color = board[i].color;
        var piece = board[i].type;
        fen2 += color === WHITE ? piece.toUpperCase() : piece.toLowerCase();
      }
      if (i + 1 & 136) {
        if (empty > 0) {
          fen2 += empty;
        }
        if (i !== SQUARE_MAP.h1) {
          fen2 += "/";
        }
        empty = 0;
        i += 8;
      }
    }
    var cflags = "";
    if (castling[WHITE] & BITS.KSIDE_CASTLE) {
      cflags += "K";
    }
    if (castling[WHITE] & BITS.QSIDE_CASTLE) {
      cflags += "Q";
    }
    if (castling[BLACK] & BITS.KSIDE_CASTLE) {
      cflags += "k";
    }
    if (castling[BLACK] & BITS.QSIDE_CASTLE) {
      cflags += "q";
    }
    cflags = cflags || "-";
    var epflags = ep_square === EMPTY ? "-" : algebraic(ep_square);
    return [fen2, turn, cflags, epflags, half_moves, move_number].join(" ");
  }
  function set_header(args) {
    for (var i = 0; i < args.length; i += 2) {
      if (typeof args[i] === "string" && typeof args[i + 1] === "string") {
        header[args[i]] = args[i + 1];
      }
    }
    return header;
  }
  function update_setup(fen2) {
    if (history.length > 0)
      return;
    if (fen2 !== DEFAULT_POSITION) {
      header["SetUp"] = "1";
      header["FEN"] = fen2;
    } else {
      delete header["SetUp"];
      delete header["FEN"];
    }
  }
  function get(square) {
    var piece = board[SQUARE_MAP[square]];
    return piece ? { type: piece.type, color: piece.color } : null;
  }
  function put(piece, square) {
    if (!("type" in piece && "color" in piece)) {
      return false;
    }
    if (SYMBOLS.indexOf(piece.type.toLowerCase()) === -1) {
      return false;
    }
    if (!(square in SQUARE_MAP)) {
      return false;
    }
    var sq = SQUARE_MAP[square];
    if (piece.type == KING && !(kings[piece.color] == EMPTY || kings[piece.color] == sq)) {
      return false;
    }
    board[sq] = { type: piece.type, color: piece.color };
    if (piece.type === KING) {
      kings[piece.color] = sq;
    }
    update_setup(generate_fen());
    return true;
  }
  function remove(square) {
    var piece = get(square);
    board[SQUARE_MAP[square]] = null;
    if (piece && piece.type === KING) {
      kings[piece.color] = EMPTY;
    }
    update_setup(generate_fen());
    return piece;
  }
  function build_move(board2, from, to, flags, promotion) {
    var move3 = {
      color: turn,
      from,
      to,
      flags,
      piece: board2[from].type
    };
    if (promotion) {
      move3.flags |= BITS.PROMOTION;
      move3.promotion = promotion;
    }
    if (board2[to]) {
      move3.captured = board2[to].type;
    } else if (flags & BITS.EP_CAPTURE) {
      move3.captured = PAWN;
    }
    return move3;
  }
  function generate_moves(options) {
    function add_move(board2, moves2, from, to, flags) {
      if (board2[from].type === PAWN && (rank(to) === RANK_8 || rank(to) === RANK_1)) {
        var pieces = [QUEEN, ROOK, BISHOP, KNIGHT];
        for (var i2 = 0, len2 = pieces.length; i2 < len2; i2++) {
          moves2.push(build_move(board2, from, to, flags, pieces[i2]));
        }
      } else {
        moves2.push(build_move(board2, from, to, flags));
      }
    }
    var moves = [];
    var us = turn;
    var them = swap_color(us);
    var second_rank = { b: RANK_7, w: RANK_2 };
    var first_sq = SQUARE_MAP.a8;
    var last_sq = SQUARE_MAP.h1;
    var single_square = false;
    var legal = typeof options !== "undefined" && "legal" in options ? options.legal : true;
    var piece_type = typeof options !== "undefined" && "piece" in options && typeof options.piece === "string" ? options.piece.toLowerCase() : true;
    if (typeof options !== "undefined" && "square" in options) {
      if (options.square in SQUARE_MAP) {
        first_sq = last_sq = SQUARE_MAP[options.square];
        single_square = true;
      } else {
        return [];
      }
    }
    for (var i = first_sq; i <= last_sq; i++) {
      if (i & 136) {
        i += 7;
        continue;
      }
      var piece = board[i];
      if (piece == null || piece.color !== us) {
        continue;
      }
      if (piece.type === PAWN && (piece_type === true || piece_type === PAWN)) {
        var square = i + PAWN_OFFSETS[us][0];
        if (board[square] == null) {
          add_move(board, moves, i, square, BITS.NORMAL);
          var square = i + PAWN_OFFSETS[us][1];
          if (second_rank[us] === rank(i) && board[square] == null) {
            add_move(board, moves, i, square, BITS.BIG_PAWN);
          }
        }
        for (j = 2; j < 4; j++) {
          var square = i + PAWN_OFFSETS[us][j];
          if (square & 136)
            continue;
          if (board[square] != null && board[square].color === them) {
            add_move(board, moves, i, square, BITS.CAPTURE);
          } else if (square === ep_square) {
            add_move(board, moves, i, ep_square, BITS.EP_CAPTURE);
          }
        }
      } else if (piece_type === true || piece_type === piece.type) {
        for (var j = 0, len = PIECE_OFFSETS[piece.type].length; j < len; j++) {
          var offset = PIECE_OFFSETS[piece.type][j];
          var square = i;
          while (true) {
            square += offset;
            if (square & 136)
              break;
            if (board[square] == null) {
              add_move(board, moves, i, square, BITS.NORMAL);
            } else {
              if (board[square].color === us)
                break;
              add_move(board, moves, i, square, BITS.CAPTURE);
              break;
            }
            if (piece.type === "n" || piece.type === "k")
              break;
          }
        }
      }
    }
    if (piece_type === true || piece_type === KING) {
      if (!single_square || last_sq === kings[us]) {
        if (castling[us] & BITS.KSIDE_CASTLE) {
          var castling_from = kings[us];
          var castling_to = castling_from + 2;
          if (board[castling_from + 1] == null && board[castling_to] == null && !attacked(them, kings[us]) && !attacked(them, castling_from + 1) && !attacked(them, castling_to)) {
            add_move(board, moves, kings[us], castling_to, BITS.KSIDE_CASTLE);
          }
        }
        if (castling[us] & BITS.QSIDE_CASTLE) {
          var castling_from = kings[us];
          var castling_to = castling_from - 2;
          if (board[castling_from - 1] == null && board[castling_from - 2] == null && board[castling_from - 3] == null && !attacked(them, kings[us]) && !attacked(them, castling_from - 1) && !attacked(them, castling_to)) {
            add_move(board, moves, kings[us], castling_to, BITS.QSIDE_CASTLE);
          }
        }
      }
    }
    if (!legal) {
      return moves;
    }
    var legal_moves = [];
    for (var i = 0, len = moves.length; i < len; i++) {
      make_move(moves[i]);
      if (!king_attacked(us)) {
        legal_moves.push(moves[i]);
      }
      undo_move();
    }
    return legal_moves;
  }
  function move_to_san(move3, moves) {
    var output = "";
    if (move3.flags & BITS.KSIDE_CASTLE) {
      output = "O-O";
    } else if (move3.flags & BITS.QSIDE_CASTLE) {
      output = "O-O-O";
    } else {
      if (move3.piece !== PAWN) {
        var disambiguator = get_disambiguator(move3, moves);
        output += move3.piece.toUpperCase() + disambiguator;
      }
      if (move3.flags & (BITS.CAPTURE | BITS.EP_CAPTURE)) {
        if (move3.piece === PAWN) {
          output += algebraic(move3.from)[0];
        }
        output += "x";
      }
      output += algebraic(move3.to);
      if (move3.flags & BITS.PROMOTION) {
        output += "=" + move3.promotion.toUpperCase();
      }
    }
    make_move(move3);
    if (in_check()) {
      if (in_checkmate()) {
        output += "#";
      } else {
        output += "+";
      }
    }
    undo_move();
    return output;
  }
  function attacked(color, square) {
    for (var i = SQUARE_MAP.a8; i <= SQUARE_MAP.h1; i++) {
      if (i & 136) {
        i += 7;
        continue;
      }
      if (board[i] == null || board[i].color !== color)
        continue;
      var piece = board[i];
      var difference = i - square;
      var index = difference + 119;
      if (ATTACKS[index] & 1 << SHIFTS[piece.type]) {
        if (piece.type === PAWN) {
          if (difference > 0) {
            if (piece.color === WHITE)
              return true;
          } else {
            if (piece.color === BLACK)
              return true;
          }
          continue;
        }
        if (piece.type === "n" || piece.type === "k")
          return true;
        var offset = RAYS[index];
        var j = i + offset;
        var blocked = false;
        while (j !== square) {
          if (board[j] != null) {
            blocked = true;
            break;
          }
          j += offset;
        }
        if (!blocked)
          return true;
      }
    }
    return false;
  }
  function king_attacked(color) {
    return attacked(swap_color(color), kings[color]);
  }
  function in_check() {
    return king_attacked(turn);
  }
  function in_checkmate() {
    return in_check() && generate_moves().length === 0;
  }
  function in_stalemate() {
    return !in_check() && generate_moves().length === 0;
  }
  function insufficient_material() {
    var pieces = {};
    var bishops = [];
    var num_pieces = 0;
    var sq_color = 0;
    for (var i = SQUARE_MAP.a8; i <= SQUARE_MAP.h1; i++) {
      sq_color = (sq_color + 1) % 2;
      if (i & 136) {
        i += 7;
        continue;
      }
      var piece = board[i];
      if (piece) {
        pieces[piece.type] = piece.type in pieces ? pieces[piece.type] + 1 : 1;
        if (piece.type === BISHOP) {
          bishops.push(sq_color);
        }
        num_pieces++;
      }
    }
    if (num_pieces === 2) {
      return true;
    } else if (
      /* k vs. kn .... or .... k vs. kb */
      num_pieces === 3 && (pieces[BISHOP] === 1 || pieces[KNIGHT] === 1)
    ) {
      return true;
    } else if (num_pieces === pieces[BISHOP] + 2) {
      var sum = 0;
      var len = bishops.length;
      for (var i = 0; i < len; i++) {
        sum += bishops[i];
      }
      if (sum === 0 || sum === len) {
        return true;
      }
    }
    return false;
  }
  function in_threefold_repetition() {
    var moves = [];
    var positions = {};
    var repetition = false;
    while (true) {
      var move3 = undo_move();
      if (!move3)
        break;
      moves.push(move3);
    }
    while (true) {
      var fen2 = generate_fen().split(" ").slice(0, 4).join(" ");
      positions[fen2] = fen2 in positions ? positions[fen2] + 1 : 1;
      if (positions[fen2] >= 3) {
        repetition = true;
      }
      if (!moves.length) {
        break;
      }
      make_move(moves.pop());
    }
    return repetition;
  }
  function push(move3) {
    history.push({
      move: move3,
      kings: { b: kings.b, w: kings.w },
      turn,
      castling: { b: castling.b, w: castling.w },
      ep_square,
      half_moves,
      move_number
    });
  }
  function make_move(move3) {
    var us = turn;
    var them = swap_color(us);
    push(move3);
    board[move3.to] = board[move3.from];
    board[move3.from] = null;
    if (move3.flags & BITS.EP_CAPTURE) {
      if (turn === BLACK) {
        board[move3.to - 16] = null;
      } else {
        board[move3.to + 16] = null;
      }
    }
    if (move3.flags & BITS.PROMOTION) {
      board[move3.to] = { type: move3.promotion, color: us };
    }
    if (board[move3.to].type === KING) {
      kings[board[move3.to].color] = move3.to;
      if (move3.flags & BITS.KSIDE_CASTLE) {
        var castling_to = move3.to - 1;
        var castling_from = move3.to + 1;
        board[castling_to] = board[castling_from];
        board[castling_from] = null;
      } else if (move3.flags & BITS.QSIDE_CASTLE) {
        var castling_to = move3.to + 1;
        var castling_from = move3.to - 2;
        board[castling_to] = board[castling_from];
        board[castling_from] = null;
      }
      castling[us] = "";
    }
    if (castling[us]) {
      for (var i = 0, len = ROOKS[us].length; i < len; i++) {
        if (move3.from === ROOKS[us][i].square && castling[us] & ROOKS[us][i].flag) {
          castling[us] ^= ROOKS[us][i].flag;
          break;
        }
      }
    }
    if (castling[them]) {
      for (var i = 0, len = ROOKS[them].length; i < len; i++) {
        if (move3.to === ROOKS[them][i].square && castling[them] & ROOKS[them][i].flag) {
          castling[them] ^= ROOKS[them][i].flag;
          break;
        }
      }
    }
    if (move3.flags & BITS.BIG_PAWN) {
      if (turn === "b") {
        ep_square = move3.to - 16;
      } else {
        ep_square = move3.to + 16;
      }
    } else {
      ep_square = EMPTY;
    }
    if (move3.piece === PAWN) {
      half_moves = 0;
    } else if (move3.flags & (BITS.CAPTURE | BITS.EP_CAPTURE)) {
      half_moves = 0;
    } else {
      half_moves++;
    }
    if (turn === BLACK) {
      move_number++;
    }
    turn = swap_color(turn);
  }
  function undo_move() {
    var old = history.pop();
    if (old == null) {
      return null;
    }
    var move3 = old.move;
    kings = old.kings;
    turn = old.turn;
    castling = old.castling;
    ep_square = old.ep_square;
    half_moves = old.half_moves;
    move_number = old.move_number;
    var us = turn;
    var them = swap_color(turn);
    board[move3.from] = board[move3.to];
    board[move3.from].type = move3.piece;
    board[move3.to] = null;
    if (move3.flags & BITS.CAPTURE) {
      board[move3.to] = { type: move3.captured, color: them };
    } else if (move3.flags & BITS.EP_CAPTURE) {
      var index;
      if (us === BLACK) {
        index = move3.to - 16;
      } else {
        index = move3.to + 16;
      }
      board[index] = { type: PAWN, color: them };
    }
    if (move3.flags & (BITS.KSIDE_CASTLE | BITS.QSIDE_CASTLE)) {
      var castling_to, castling_from;
      if (move3.flags & BITS.KSIDE_CASTLE) {
        castling_to = move3.to + 1;
        castling_from = move3.to - 1;
      } else if (move3.flags & BITS.QSIDE_CASTLE) {
        castling_to = move3.to - 2;
        castling_from = move3.to + 1;
      }
      board[castling_to] = board[castling_from];
      board[castling_from] = null;
    }
    return move3;
  }
  function move_from_san(move3, sloppy) {
    var clean_move = stripped_san(move3);
    for (var parser = 0; parser < 2; parser++) {
      if (parser == PARSER_SLOPPY) {
        if (!sloppy) {
          return null;
        }
        var overly_disambiguated = false;
        var matches = clean_move.match(
          /([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/
        );
        if (matches) {
          var piece = matches[1];
          var from = matches[2];
          var to = matches[3];
          var promotion = matches[4];
          if (from.length == 1) {
            overly_disambiguated = true;
          }
        } else {
          var matches = clean_move.match(
            /([pnbrqkPNBRQK])?([a-h]?[1-8]?)x?-?([a-h][1-8])([qrbnQRBN])?/
          );
          if (matches) {
            var piece = matches[1];
            var from = matches[2];
            var to = matches[3];
            var promotion = matches[4];
            if (from.length == 1) {
              var overly_disambiguated = true;
            }
          }
        }
      }
      var piece_type = infer_piece_type(clean_move);
      var moves = generate_moves({
        legal: true,
        piece: piece ? piece : piece_type
      });
      for (var i = 0, len = moves.length; i < len; i++) {
        switch (parser) {
          case PARSER_STRICT: {
            if (clean_move === stripped_san(move_to_san(moves[i], moves))) {
              return moves[i];
            }
            break;
          }
          case PARSER_SLOPPY: {
            if (matches) {
              if ((!piece || piece.toLowerCase() == moves[i].piece) && SQUARE_MAP[from] == moves[i].from && SQUARE_MAP[to] == moves[i].to && (!promotion || promotion.toLowerCase() == moves[i].promotion)) {
                return moves[i];
              } else if (overly_disambiguated) {
                var square = algebraic(moves[i].from);
                if ((!piece || piece.toLowerCase() == moves[i].piece) && SQUARE_MAP[to] == moves[i].to && (from == square[0] || from == square[1]) && (!promotion || promotion.toLowerCase() == moves[i].promotion)) {
                  return moves[i];
                }
              }
            }
          }
        }
      }
    }
    return null;
  }
  function make_pretty(ugly_move) {
    var move3 = clone(ugly_move);
    move3.san = move_to_san(move3, generate_moves({ legal: true }));
    move3.to = algebraic(move3.to);
    move3.from = algebraic(move3.from);
    var flags = "";
    for (var flag in BITS) {
      if (BITS[flag] & move3.flags) {
        flags += FLAGS[flag];
      }
    }
    move3.flags = flags;
    return move3;
  }
  function perft(depth) {
    var moves = generate_moves({ legal: false });
    var nodes = 0;
    var color = turn;
    for (var i = 0, len = moves.length; i < len; i++) {
      make_move(moves[i]);
      if (!king_attacked(color)) {
        if (depth - 1 > 0) {
          var child_nodes = perft(depth - 1);
          nodes += child_nodes;
        } else {
          nodes++;
        }
      }
      undo_move();
    }
    return nodes;
  }
  return {
    /***************************************************************************
     * PUBLIC API
     **************************************************************************/
    load: function(fen2) {
      return load(fen2);
    },
    reset: function() {
      return reset();
    },
    moves: function(options) {
      var ugly_moves = generate_moves(options);
      var moves = [];
      for (var i = 0, len = ugly_moves.length; i < len; i++) {
        if (typeof options !== "undefined" && "verbose" in options && options.verbose) {
          moves.push(make_pretty(ugly_moves[i]));
        } else {
          moves.push(
            move_to_san(ugly_moves[i], generate_moves({ legal: true }))
          );
        }
      }
      return moves;
    },
    in_check: function() {
      return in_check();
    },
    in_checkmate: function() {
      return in_checkmate();
    },
    in_stalemate: function() {
      return in_stalemate();
    },
    in_draw: function() {
      return half_moves >= 100 || in_stalemate() || insufficient_material() || in_threefold_repetition();
    },
    insufficient_material: function() {
      return insufficient_material();
    },
    in_threefold_repetition: function() {
      return in_threefold_repetition();
    },
    game_over: function() {
      return half_moves >= 100 || in_checkmate() || in_stalemate() || insufficient_material() || in_threefold_repetition();
    },
    validate_fen: function(fen2) {
      return validate_fen(fen2);
    },
    fen: function() {
      return generate_fen();
    },
    board: function() {
      var output = [], row = [];
      for (var i = SQUARE_MAP.a8; i <= SQUARE_MAP.h1; i++) {
        if (board[i] == null) {
          row.push(null);
        } else {
          row.push({
            square: algebraic(i),
            type: board[i].type,
            color: board[i].color
          });
        }
        if (i + 1 & 136) {
          output.push(row);
          row = [];
          i += 8;
        }
      }
      return output;
    },
    pgn: function(options) {
      var newline = typeof options === "object" && typeof options.newline_char === "string" ? options.newline_char : "\n";
      var max_width = typeof options === "object" && typeof options.max_width === "number" ? options.max_width : 0;
      var result = [];
      var header_exists = false;
      for (var i in header) {
        result.push("[" + i + ' "' + header[i] + '"]' + newline);
        header_exists = true;
      }
      if (header_exists && history.length) {
        result.push(newline);
      }
      var append_comment = function(move_string2) {
        var comment = comments[generate_fen()];
        if (typeof comment !== "undefined") {
          var delimiter = move_string2.length > 0 ? " " : "";
          move_string2 = `${move_string2}${delimiter}{${comment}}`;
        }
        return move_string2;
      };
      var reversed_history = [];
      while (history.length > 0) {
        reversed_history.push(undo_move());
      }
      var moves = [];
      var move_string = "";
      if (reversed_history.length === 0) {
        moves.push(append_comment(""));
      }
      while (reversed_history.length > 0) {
        move_string = append_comment(move_string);
        var move3 = reversed_history.pop();
        if (!history.length && move3.color === "b") {
          const prefix = `${move_number}. ...`;
          move_string = move_string ? `${move_string} ${prefix}` : prefix;
        } else if (move3.color === "w") {
          if (move_string.length) {
            moves.push(move_string);
          }
          move_string = move_number + ".";
        }
        move_string = move_string + " " + move_to_san(move3, generate_moves({ legal: true }));
        make_move(move3);
      }
      if (move_string.length) {
        moves.push(append_comment(move_string));
      }
      if (typeof header.Result !== "undefined") {
        moves.push(header.Result);
      }
      if (max_width === 0) {
        return result.join("") + moves.join(" ");
      }
      var strip = function() {
        if (result.length > 0 && result[result.length - 1] === " ") {
          result.pop();
          return true;
        }
        return false;
      };
      var wrap_comment = function(width, move4) {
        for (var token of move4.split(" ")) {
          if (!token) {
            continue;
          }
          if (width + token.length > max_width) {
            while (strip()) {
              width--;
            }
            result.push(newline);
            width = 0;
          }
          result.push(token);
          width += token.length;
          result.push(" ");
          width++;
        }
        if (strip()) {
          width--;
        }
        return width;
      };
      var current_width = 0;
      for (var i = 0; i < moves.length; i++) {
        if (current_width + moves[i].length > max_width) {
          if (moves[i].includes("{")) {
            current_width = wrap_comment(current_width, moves[i]);
            continue;
          }
        }
        if (current_width + moves[i].length > max_width && i !== 0) {
          if (result[result.length - 1] === " ") {
            result.pop();
          }
          result.push(newline);
          current_width = 0;
        } else if (i !== 0) {
          result.push(" ");
          current_width++;
        }
        result.push(moves[i]);
        current_width += moves[i].length;
      }
      return result.join("");
    },
    load_pgn: function(pgn, options) {
      var sloppy = typeof options !== "undefined" && "sloppy" in options ? options.sloppy : false;
      function mask(str) {
        return str.replace(/\\/g, "\\");
      }
      function parse_pgn_header(header2, options2) {
        var newline_char2 = typeof options2 === "object" && typeof options2.newline_char === "string" ? options2.newline_char : "\r?\n";
        var header_obj = {};
        var headers2 = header2.split(new RegExp(mask(newline_char2)));
        var key2 = "";
        var value = "";
        for (var i = 0; i < headers2.length; i++) {
          var regex = /^\s*\[([A-Za-z]+)\s*"(.*)"\s*\]\s*$/;
          key2 = headers2[i].replace(regex, "$1");
          value = headers2[i].replace(regex, "$2");
          if (trim(key2).length > 0) {
            header_obj[key2] = value;
          }
        }
        return header_obj;
      }
      pgn = pgn.trim();
      var newline_char = typeof options === "object" && typeof options.newline_char === "string" ? options.newline_char : "\r?\n";
      var header_regex = new RegExp(
        "^(\\[((?:" + mask(newline_char) + ")|.)*\\])(?:\\s*" + mask(newline_char) + "){2}"
      );
      var header_string = header_regex.test(pgn) ? header_regex.exec(pgn)[1] : "";
      reset();
      var headers = parse_pgn_header(header_string, options);
      var fen2 = "";
      for (var key in headers) {
        if (key.toLowerCase() === "fen") {
          fen2 = headers[key];
        }
        set_header([key, headers[key]]);
      }
      if (sloppy) {
        if (fen2) {
          if (!load(fen2, true)) {
            return false;
          }
        }
      } else {
        if (headers["SetUp"] === "1") {
          if (!("FEN" in headers && load(headers["FEN"], true))) {
            return false;
          }
        }
      }
      var to_hex = function(string) {
        return Array.from(string).map(function(c) {
          return c.charCodeAt(0) < 128 ? c.charCodeAt(0).toString(16) : encodeURIComponent(c).replace(/\%/g, "").toLowerCase();
        }).join("");
      };
      var from_hex = function(string) {
        return string.length == 0 ? "" : decodeURIComponent("%" + string.match(/.{1,2}/g).join("%"));
      };
      var encode_comment = function(string) {
        string = string.replace(new RegExp(mask(newline_char), "g"), " ");
        return `{${to_hex(string.slice(1, string.length - 1))}}`;
      };
      var decode_comment = function(string) {
        if (string.startsWith("{") && string.endsWith("}")) {
          return from_hex(string.slice(1, string.length - 1));
        }
      };
      var ms = pgn.replace(header_string, "").replace(
        /* encode comments so they don't get deleted below */
        new RegExp(`({[^}]*})+?|;([^${mask(newline_char)}]*)`, "g"),
        function(match, bracket, semicolon) {
          return bracket !== void 0 ? encode_comment(bracket) : " " + encode_comment(`{${semicolon.slice(1)}}`);
        }
      ).replace(new RegExp(mask(newline_char), "g"), " ");
      var rav_regex = /(\([^\(\)]+\))+?/g;
      while (rav_regex.test(ms)) {
        ms = ms.replace(rav_regex, "");
      }
      ms = ms.replace(/\d+\.(\.\.)?/g, "");
      ms = ms.replace(/\.\.\./g, "");
      ms = ms.replace(/\$\d+/g, "");
      var moves = trim(ms).split(new RegExp(/\s+/));
      moves = moves.join(",").replace(/,,+/g, ",").split(",");
      var move3 = "";
      var result = "";
      for (var half_move = 0; half_move < moves.length; half_move++) {
        var comment = decode_comment(moves[half_move]);
        if (comment !== void 0) {
          comments[generate_fen()] = comment;
          continue;
        }
        move3 = move_from_san(moves[half_move], sloppy);
        if (move3 == null) {
          if (TERMINATION_MARKERS.indexOf(moves[half_move]) > -1) {
            result = moves[half_move];
          } else {
            return false;
          }
        } else {
          result = "";
          make_move(move3);
        }
      }
      if (result && Object.keys(header).length && !header["Result"]) {
        set_header(["Result", result]);
      }
      return true;
    },
    header: function() {
      return set_header(arguments);
    },
    turn: function() {
      return turn;
    },
    move: function(move3, options) {
      var sloppy = typeof options !== "undefined" && "sloppy" in options ? options.sloppy : false;
      var move_obj = null;
      if (typeof move3 === "string") {
        move_obj = move_from_san(move3, sloppy);
      } else if (typeof move3 === "object") {
        var moves = generate_moves();
        for (var i = 0, len = moves.length; i < len; i++) {
          if (move3.from === algebraic(moves[i].from) && move3.to === algebraic(moves[i].to) && (!("promotion" in moves[i]) || move3.promotion === moves[i].promotion)) {
            move_obj = moves[i];
            break;
          }
        }
      }
      if (!move_obj) {
        return null;
      }
      var pretty_move = make_pretty(move_obj);
      make_move(move_obj);
      return pretty_move;
    },
    undo: function() {
      var move3 = undo_move();
      return move3 ? make_pretty(move3) : null;
    },
    clear: function() {
      return clear2();
    },
    put: function(piece, square) {
      return put(piece, square);
    },
    get: function(square) {
      return get(square);
    },
    ascii() {
      var s = "   +------------------------+\n";
      for (var i = SQUARE_MAP.a8; i <= SQUARE_MAP.h1; i++) {
        if (file(i) === 0) {
          s += " " + "87654321"[rank(i)] + " |";
        }
        if (board[i] == null) {
          s += " . ";
        } else {
          var piece = board[i].type;
          var color = board[i].color;
          var symbol = color === WHITE ? piece.toUpperCase() : piece.toLowerCase();
          s += " " + symbol + " ";
        }
        if (i + 1 & 136) {
          s += "|\n";
          i += 8;
        }
      }
      s += "   +------------------------+\n";
      s += "     a  b  c  d  e  f  g  h";
      return s;
    },
    remove: function(square) {
      return remove(square);
    },
    perft: function(depth) {
      return perft(depth);
    },
    square_color: function(square) {
      if (square in SQUARE_MAP) {
        var sq_0x88 = SQUARE_MAP[square];
        return (rank(sq_0x88) + file(sq_0x88)) % 2 === 0 ? "light" : "dark";
      }
      return null;
    },
    history: function(options) {
      var reversed_history = [];
      var move_history = [];
      var verbose = typeof options !== "undefined" && "verbose" in options && options.verbose;
      while (history.length > 0) {
        reversed_history.push(undo_move());
      }
      while (reversed_history.length > 0) {
        var move3 = reversed_history.pop();
        if (verbose) {
          move_history.push(make_pretty(move3));
        } else {
          move_history.push(move_to_san(move3, generate_moves({ legal: true })));
        }
        make_move(move3);
      }
      return move_history;
    },
    get_comment: function() {
      return comments[generate_fen()];
    },
    set_comment: function(comment) {
      comments[generate_fen()] = comment.replace("{", "[").replace("}", "]");
    },
    delete_comment: function() {
      var comment = comments[generate_fen()];
      delete comments[generate_fen()];
      return comment;
    },
    get_comments: function() {
      prune_comments();
      return Object.keys(comments).map(function(fen2) {
        return { fen: fen2, comment: comments[fen2] };
      });
    },
    delete_comments: function() {
      prune_comments();
      return Object.keys(comments).map(function(fen2) {
        var comment = comments[fen2];
        delete comments[fen2];
        return { fen: fen2, comment };
      });
    }
  };
};

// src/parser.ts
var SEPARATOR = "---";
function parseChessInput(source) {
  const result = {
    type: "game",
    fen: null,
    pgn: null,
    moves: [],
    orientation: "white",
    isStatic: false,
    isEditable: true,
    isPuzzle: false,
    playerColor: "white",
    solutionMoves: [],
    puzzleRating: null,
    puzzleThemes: [],
    puzzleTitle: null,
    headers: {},
    arrows: [],
    circles: [],
    highlights: [],
    startMove: 0,
    error: null,
    warnings: []
  };
  try {
    const cleaned = source.trim();
    const { markers, chessData } = splitSections(cleaned);
    for (const line of markers) {
      parseMarkerLine(line, result);
    }
    if (!chessData) {
      result.error = "No FEN or PGN data provided";
      return result;
    }
    parseChessData(chessData, result);
    if (result.isPuzzle && !result.error) {
      const hasOrientationMarker = markers.some(
        (l) => /^\[(white|black|flip)\]$/i.test(l)
      );
      finalizePuzzle(result, hasOrientationMarker);
    }
    return result;
  } catch (e) {
    result.error = e instanceof Error ? e.message : "Unknown parsing error";
    return result;
  }
}
function splitSections(source) {
  const lines = source.split(/\r?\n/);
  const sepLineIndex = lines.findIndex((l) => l.trim() === SEPARATOR);
  if (sepLineIndex !== -1) {
    const markerLines = lines.slice(0, sepLineIndex).map((l) => l.trim()).filter((l) => l);
    const chessData = lines.slice(sepLineIndex + 1).join("\n").trim();
    return { markers: markerLines, chessData };
  }
  const markers = [];
  const chessLines = [];
  let inChessData = false;
  for (const line of lines) {
    const trimmed = line.trim();
    if (!inChessData && !trimmed)
      continue;
    if (!inChessData && isMarkerLine(trimmed)) {
      markers.push(trimmed);
    } else {
      inChessData = true;
      chessLines.push(line);
    }
  }
  return { markers, chessData: chessLines.join("\n").trim() };
}
function isMarkerLine(line) {
  return /^\[(white|black|flip|static|noeditable|puzzle)\]$/i.test(line) || /^\[(ply|rating|themes|title|arrow|circle|highlight)\s*:\s*[^\]]+\]$/i.test(
    line
  );
}
function parseChessData(chessData, result) {
  const hasPgnHeaders = /\[\w+\s+"[^"]*"\]/.test(chessData);
  const cleanedForDetection = chessData.replace(/\[[^\]]*"[^\]]*\]/g, "").trim();
  const firstToken = cleanedForDetection.split(/\s+/)[0] ?? "";
  const isFen = !hasPgnHeaders && firstToken.split("/").length === 8 && /^[rnbqkpRNBQKP1-8/]+$/.test(firstToken);
  if (isFen) {
    result.type = "fen";
    result.fen = normalizeFen(chessData.trim());
    const validation = validateFen(result.fen);
    if (!validation.valid) {
      result.error = "Invalid FEN: " + validation.error;
    }
  } else {
    result.type = result.isPuzzle ? "puzzle" : "game";
    result.pgn = chessData;
    const fenHeader = chessData.match(/\[FEN\s+"([^"]+)"\]/i);
    if (fenHeader) {
      result.fen = normalizeFen(fenHeader[1]);
      const validation = validateFen(result.fen);
      if (!validation.valid) {
        result.error = "Invalid FEN: " + validation.error;
      }
    }
    const headerMatches = chessData.matchAll(/\[(\w+)\s+"([^"]+)"\]/g);
    for (const match of headerMatches) {
      result.headers[match[1]] = match[2];
    }
    if (result.isPuzzle) {
      result.solutionMoves = parseFlatMoves(
        chessData,
        result.fen,
        result.warnings
      );
    } else {
      result.moves = parseMovesWithVariations(
        chessData,
        result.fen,
        result.warnings
      );
    }
  }
}
function finalizePuzzle(result, hasOrientationMarker) {
  if (result.type === "fen") {
    result.error = "Puzzle requires PGN with moves, not just a FEN position";
    return;
  }
  if (result.solutionMoves.length === 0) {
    result.error = "Puzzle has no valid moves";
    return;
  }
  result.isEditable = false;
  const fenTurn = result.fen ? result.fen.split(/\s+/)[1] === "b" ? "black" : "white" : "white";
  if (result.solutionMoves.length % 2 === 0) {
    result.playerColor = fenTurn === "white" ? "black" : "white";
  } else {
    result.playerColor = fenTurn;
  }
  if (!hasOrientationMarker) {
    result.orientation = result.playerColor;
  }
}
function parseMarkerLine(line, result) {
  const kvMatch = line.match(/^\[(\w+)\s*:\s*([^\]]+)\]$/i);
  if (kvMatch) {
    const key = kvMatch[1].toLowerCase();
    const value = kvMatch[2].trim();
    switch (key) {
      case "rating":
        result.puzzleRating = parseInt(value) || null;
        break;
      case "themes":
        result.puzzleThemes = value.split(/[,\s]+/).filter((t) => t);
        break;
      case "title":
        result.puzzleTitle = value;
        break;
      case "ply":
        result.startMove = parseInt(value) || 0;
        break;
    }
  }
  if (/^\[puzzle\]$/i.test(line)) {
    result.isPuzzle = true;
  } else if (/^\[(?:black|flip)\]$/i.test(line)) {
    result.orientation = "black";
  } else if (/^\[white\]$/i.test(line)) {
    result.orientation = "white";
  } else if (/^\[static\]$/i.test(line)) {
    result.isStatic = true;
    result.isEditable = false;
  } else if (/^\[noeditable\]$/i.test(line)) {
    result.isEditable = false;
  }
  parseAnnotationMarker(line, result);
}
function parseAnnotationMarker(marker, result) {
  const arrowMatch = marker.match(
    /^\[arrow\s*:\s*([a-h][1-8])[-]?([a-h][1-8])(?:\s+(\w+))?\]$/i
  );
  if (arrowMatch) {
    result.arrows.push({
      from: arrowMatch[1].toLowerCase(),
      to: arrowMatch[2].toLowerCase(),
      color: arrowMatch[3] ? ANNOTATION_COLORS[arrowMatch[3]] ?? arrowMatch[3] : void 0
    });
  }
  const circleMatch = marker.match(
    /^\[circle\s*:\s*([a-h][1-8])(?:\s+(\w+))?\]$/i
  );
  if (circleMatch) {
    result.circles.push({
      square: circleMatch[1].toLowerCase(),
      color: circleMatch[2] ? ANNOTATION_COLORS[circleMatch[2]] ?? circleMatch[2] : void 0
    });
  }
  const highlightMatch = marker.match(
    /^\[highlight\s*:\s*([a-h][1-8])(?:\s+(\w+))?\]$/i
  );
  if (highlightMatch) {
    result.highlights.push({
      square: highlightMatch[1].toLowerCase(),
      color: highlightMatch[2] ? ANNOTATION_COLORS[highlightMatch[2]] ?? highlightMatch[2] : void 0
    });
  }
}
function tokenizePgn(pgn) {
  let cleaned = pgn.replace(/\[[^\]]*"[^\]]*"\]/g, "");
  cleaned = cleaned.replace(/\s*(1-0|0-1|1\/2-1\/2|\*)\s*$/g, "").trim();
  const tokens = [];
  let i = 0;
  while (i < cleaned.length) {
    const ch = cleaned[i];
    if (/\s/.test(ch)) {
      i++;
      continue;
    }
    if (/\d/.test(ch)) {
      let j = i;
      while (j < cleaned.length && /[\d.]/.test(cleaned[j]))
        j++;
      const segment = cleaned.slice(i, j);
      if (/^\d+\.+$/.test(segment)) {
        i = j;
        continue;
      }
    }
    if (ch === "{") {
      const end3 = cleaned.indexOf("}", i + 1);
      if (end3 === -1) {
        i++;
        continue;
      }
      tokens.push({ type: "comment", value: cleaned.slice(i + 1, end3).trim() });
      i = end3 + 1;
      continue;
    }
    if (ch === "$") {
      let j = i + 1;
      while (j < cleaned.length && /\d/.test(cleaned[j]))
        j++;
      tokens.push({ type: "nag", value: cleaned.slice(i, j) });
      i = j;
      continue;
    }
    if (ch === "(") {
      tokens.push({ type: "open_variation", value: "(" });
      i++;
      continue;
    }
    if (ch === ")") {
      tokens.push({ type: "close_variation", value: ")" });
      i++;
      continue;
    }
    if (/[a-hKQRBNO]/.test(ch)) {
      let j = i;
      while (j < cleaned.length && !/[\s{}()$]/.test(cleaned[j])) {
        j++;
      }
      const moveStr = cleaned.slice(i, j);
      tokens.push({ type: "move", value: moveStr });
      i = j;
      continue;
    }
    i++;
  }
  return tokens;
}
function extractInlineNag(moveStr) {
  const nagSuffix = moveStr.match(/([!?]{1,2})$/);
  if (!nagSuffix)
    return { move: moveStr, nagCode: void 0 };
  const inline = nagSuffix[1];
  const def = NAG_BY_INLINE[inline];
  if (!def)
    return { move: moveStr, nagCode: void 0 };
  return {
    move: moveStr.replace(/[!?]+$/, ""),
    nagCode: def.code
  };
}
function parseMovesWithVariations(pgn, startFen, warnings) {
  const tokens = tokenizePgn(pgn);
  const rootChess = new Chess();
  if (startFen) {
    try {
      rootChess.load(normalizeFen(startFen));
    } catch {
      return [];
    }
  }
  const stack = [];
  let currentMoves = [];
  let chess = rootChess;
  let pendingComment;
  let pendingAnnotation;
  let pendingNag;
  for (const token of tokens) {
    switch (token.type) {
      case "comment": {
        const content = token.value;
        const annotation = parseCommentAnnotations(content);
        const textComment = content.replace(/\[%cal\s+[^\]]+\]/gi, "").replace(/\[%csl\s+[^\]]+\]/gi, "").trim();
        if (currentMoves.length > 0) {
          const lastMove = currentMoves[currentMoves.length - 1];
          if (textComment)
            lastMove.comment = textComment;
          if (annotation.arrows.length > 0 || annotation.circles.length > 0) {
            lastMove.annotations = mergeAnnotations(
              lastMove.annotations,
              annotation
            );
          }
        } else {
          pendingComment = textComment || void 0;
          pendingAnnotation = annotation.arrows.length > 0 || annotation.circles.length > 0 ? annotation : void 0;
        }
        break;
      }
      case "nag": {
        const def = NAG_BY_CODE[token.value];
        if (def) {
          if (currentMoves.length > 0) {
            currentMoves[currentMoves.length - 1].nag = def.code;
          } else {
            pendingNag = def.code;
          }
        }
        break;
      }
      case "open_variation": {
        if (currentMoves.length === 0)
          break;
        const branchIndex = currentMoves.length - 1;
        const branchFen = branchIndex > 0 ? currentMoves[branchIndex - 1].fen : startFen ? normalizeFen(startFen) : new Chess().fen();
        stack.push({
          chess,
          moves: currentMoves,
          parentMoves: currentMoves,
          branchFromIndex: branchIndex
        });
        const varChess = new Chess();
        try {
          varChess.load(branchFen);
        } catch {
          break;
        }
        chess = varChess;
        currentMoves = [];
        pendingComment = void 0;
        pendingAnnotation = void 0;
        pendingNag = void 0;
        break;
      }
      case "close_variation": {
        if (stack.length === 0)
          break;
        const frame = stack.pop();
        if (currentMoves.length > 0 && frame.parentMoves) {
          const parentMove = frame.parentMoves[frame.branchFromIndex];
          if (parentMove) {
            parentMove.variations.push(currentMoves);
          }
        }
        chess = frame.chess;
        currentMoves = frame.moves;
        pendingComment = void 0;
        pendingAnnotation = void 0;
        pendingNag = void 0;
        break;
      }
      case "move": {
        const { move: moveStr, nagCode: inlineNagCode } = extractInlineNag(token.value);
        try {
          const result = chess.move(moveStr, { sloppy: true });
          if (!result)
            continue;
          const node = {
            san: result.san,
            from: result.from,
            to: result.to,
            fen: chess.fen(),
            comment: pendingComment,
            nag: pendingNag,
            annotations: pendingAnnotation,
            variations: []
          };
          if (inlineNagCode) {
            node.nag = inlineNagCode;
          }
          currentMoves.push(node);
          pendingComment = void 0;
          pendingAnnotation = void 0;
          pendingNag = void 0;
        } catch {
          if (warnings) {
            warnings.push(
              `Skipped invalid move "${moveStr}" after ${currentMoves.length} moves`
            );
          }
        }
        break;
      }
    }
  }
  while (stack.length > 0) {
    const frame = stack.pop();
    if (currentMoves.length > 0 && frame.parentMoves) {
      const parentMove = frame.parentMoves[frame.branchFromIndex];
      if (parentMove) {
        parentMove.variations.push(currentMoves);
      }
    }
    chess = frame.chess;
    currentMoves = frame.moves;
  }
  return currentMoves;
}
function parseFlatMoves(pgn, startFen, warnings) {
  const chess = new Chess();
  const moves = [];
  if (startFen) {
    try {
      chess.load(normalizeFen(startFen));
    } catch {
      return moves;
    }
  }
  let cleaned = pgn.replace(/\[[^\]]*"[^\]]*"\]/g, "");
  cleaned = stripVariations(cleaned);
  cleaned = cleaned.replace(/\s*(1-0|0-1|1\/2-1\/2|\*)\s*$/g, "").replace(/\s+/g, " ").trim();
  const tokenRegex = /(\{[^}]*\})|(\$\d+)|([KQRBN]?[a-h]?[1-8]?x?[a-h][1-8](?:=[QRBN])?[+#]?(?:[!?]{1,2})?|O-O-O[!?]{0,2}|O-O[!?]{0,2})/g;
  let match;
  let pendingComment;
  let pendingAnnotation;
  let pendingNag;
  while ((match = tokenRegex.exec(cleaned)) !== null) {
    const token = match[0];
    if (token.startsWith("{") && token.endsWith("}")) {
      const content = token.slice(1, -1).trim();
      const annotation = parseCommentAnnotations(content);
      const textComment = content.replace(/\[%cal\s+[^\]]+\]/gi, "").replace(/\[%csl\s+[^\]]+\]/gi, "").trim();
      if (moves.length > 0) {
        const lastMove = moves[moves.length - 1];
        if (textComment)
          lastMove.comment = textComment;
        if (annotation.arrows.length > 0 || annotation.circles.length > 0) {
          lastMove.annotations = mergeAnnotations(
            lastMove.annotations,
            annotation
          );
        }
      } else {
        pendingComment = textComment || void 0;
        pendingAnnotation = annotation.arrows.length > 0 || annotation.circles.length > 0 ? annotation : void 0;
      }
    } else if (token.startsWith("$")) {
      const def = NAG_BY_CODE[token];
      if (def) {
        if (moves.length > 0) {
          moves[moves.length - 1].nag = def.code;
        } else {
          pendingNag = def.code;
        }
      }
    } else {
      const { move: moveStr, nagCode: inlineNagCode } = extractInlineNag(token);
      try {
        const result = chess.move(moveStr, { sloppy: true });
        if (!result)
          continue;
        const moveData = {
          san: result.san,
          from: result.from,
          to: result.to,
          fen: chess.fen(),
          comment: pendingComment,
          nag: pendingNag,
          annotations: pendingAnnotation
        };
        if (inlineNagCode) {
          moveData.nag = inlineNagCode;
        }
        moves.push(moveData);
        pendingComment = void 0;
        pendingAnnotation = void 0;
        pendingNag = void 0;
      } catch {
        if (warnings) {
          warnings.push(
            `Skipped invalid move "${moveStr}" after ${moves.length} moves`
          );
        }
      }
    }
  }
  return moves;
}
function parseCommentAnnotations(comment) {
  const annotation = {
    arrows: [],
    circles: [],
    highlights: []
  };
  const calMatch = comment.match(/\[%cal\s+([^\]]+)\]/i);
  if (calMatch) {
    const defs = calMatch[1].split(",");
    for (const def of defs) {
      const m = def.trim().match(/^([RGBYOP]?)([a-h][1-8])([a-h][1-8])$/i);
      if (m) {
        annotation.arrows.push({
          from: m[2].toLowerCase(),
          to: m[3].toLowerCase(),
          color: m[1] ? ANNOTATION_COLORS[m[1].toUpperCase()] ?? "green" : "green"
        });
      }
    }
  }
  const cslMatch = comment.match(/\[%csl\s+([^\]]+)\]/i);
  if (cslMatch) {
    const defs = cslMatch[1].split(",");
    for (const def of defs) {
      const m = def.trim().match(/^([RGBYOP]?)([a-h][1-8])$/i);
      if (m) {
        annotation.circles.push({
          square: m[2].toLowerCase(),
          color: m[1] ? ANNOTATION_COLORS[m[1].toUpperCase()] ?? "green" : "green"
        });
      }
    }
  }
  return annotation;
}
function mergeAnnotations(existing, incoming) {
  if (!existing)
    return incoming;
  return {
    arrows: [...existing.arrows, ...incoming.arrows],
    circles: [...existing.circles, ...incoming.circles],
    highlights: [...existing.highlights, ...incoming.highlights]
  };
}
function stripVariations(text) {
  let result = "";
  let depth = 0;
  let inComment = false;
  for (const ch of text) {
    if (ch === "{" && depth === 0) {
      inComment = true;
      result += ch;
      continue;
    }
    if (ch === "}" && inComment) {
      inComment = false;
      result += ch;
      continue;
    }
    if (inComment) {
      result += ch;
      continue;
    }
    if (ch === "(") {
      depth++;
    } else if (ch === ")") {
      depth = Math.max(0, depth - 1);
    } else if (depth === 0) {
      result += ch;
    }
  }
  return result;
}
function normalizeFen(fen) {
  const parts = fen.trim().split(/\s+/);
  if (parts.length === 0 || parts[0].split("/").length !== 8)
    return fen;
  const position = parts[0];
  const turn = parts[1] ?? "w";
  const castling = parts[2] ?? "-";
  const enPassant = parts[3] ?? "-";
  const halfMove = parts[4] ?? "0";
  const fullMove = parts[5] ?? "1";
  return `${position} ${turn} ${castling} ${enPassant} ${halfMove} ${fullMove}`;
}
function validateFen(fen) {
  const chess = new Chess();
  if (typeof chess.validate_fen === "function") {
    const result = chess.validate_fen(fen);
    return {
      valid: result.valid,
      error: result.valid ? void 0 : result.error
    };
  }
  try {
    const loaded = chess.load(fen);
    if (loaded === false) {
      return { valid: false, error: "Invalid FEN position" };
    }
    return { valid: true };
  } catch (err) {
    return {
      valid: false,
      error: err instanceof Error ? err.message : "Invalid FEN"
    };
  }
}
function generateAnalysisUrls(data) {
  const isFlipped = data.orientation === "black";
  const colorParam = isFlipped ? "?color=black" : "?color=white";
  const flipParam = isFlipped ? "&flip=true" : "";
  let lichessUrl;
  let chessComUrl;
  if (data.type === "fen" && data.fen) {
    const fenForLichess = data.fen.replace(/\s+/g, "_");
    lichessUrl = `https://lichess.org/analysis/${fenForLichess}${colorParam}`;
    chessComUrl = `https://www.chess.com/analysis?fen=${encodeURIComponent(data.fen)}${flipParam}`;
  } else {
    const movesSan = flattenMainLine(data.moves).map((m) => m.san).join(" ");
    const fallback = data.solutionMoves.map((m) => m.san).join(" ");
    const san = movesSan || fallback;
    const pgnForUrl = data.fen ? `[SetUp "1"][FEN "${data.fen}"] ${san}` : san;
    lichessUrl = `https://lichess.org/analysis/pgn/${encodeURIComponent(pgnForUrl)}${colorParam}`;
    chessComUrl = `https://www.chess.com/analysis?pgn=${encodeURIComponent(pgnForUrl)}${flipParam}`;
  }
  return { lichess: lichessUrl, chessCom: chessComUrl };
}
function flattenMainLine(moves) {
  return moves.map((m) => m);
}

// node_modules/chessground/dist/types.js
var colors = ["white", "black"];
var files = ["a", "b", "c", "d", "e", "f", "g", "h"];
var ranks = ["1", "2", "3", "4", "5", "6", "7", "8"];

// node_modules/chessground/dist/util.js
var invRanks = [...ranks].reverse();
var allKeys = Array.prototype.concat(...files.map((c) => ranks.map((r) => c + r)));
var pos2key = (pos) => allKeys[8 * pos[0] + pos[1]];
var key2pos = (k) => [k.charCodeAt(0) - 97, k.charCodeAt(1) - 49];
var allPos = allKeys.map(key2pos);
function memo(f) {
  let v;
  const ret = () => {
    if (v === void 0)
      v = f();
    return v;
  };
  ret.clear = () => {
    v = void 0;
  };
  return ret;
}
var timer = () => {
  let startAt;
  return {
    start() {
      startAt = performance.now();
    },
    cancel() {
      startAt = void 0;
    },
    stop() {
      if (!startAt)
        return 0;
      const time = performance.now() - startAt;
      startAt = void 0;
      return time;
    }
  };
};
var opposite = (c) => c === "white" ? "black" : "white";
var distanceSq = (pos1, pos2) => {
  const dx = pos1[0] - pos2[0], dy = pos1[1] - pos2[1];
  return dx * dx + dy * dy;
};
var samePiece = (p1, p2) => p1.role === p2.role && p1.color === p2.color;
var posToTranslate = (bounds) => (pos, asWhite) => [
  (asWhite ? pos[0] : 7 - pos[0]) * bounds.width / 8,
  (asWhite ? 7 - pos[1] : pos[1]) * bounds.height / 8
];
var translate = (el, pos) => {
  el.style.transform = `translate(${pos[0]}px,${pos[1]}px)`;
};
var translateAndScale = (el, pos, scale = 1) => {
  el.style.transform = `translate(${pos[0]}px,${pos[1]}px) scale(${scale})`;
};
var setVisible = (el, v) => {
  el.style.visibility = v ? "visible" : "hidden";
};
var eventPosition = (e) => {
  var _a;
  if (e.clientX || e.clientX === 0)
    return [e.clientX, e.clientY];
  if ((_a = e.targetTouches) === null || _a === void 0 ? void 0 : _a[0])
    return [e.targetTouches[0].clientX, e.targetTouches[0].clientY];
  return;
};
var isRightButton = (e) => e.button === 2;
var createEl = (tagName, className) => {
  const el = document.createElement(tagName);
  if (className)
    el.className = className;
  return el;
};
function computeSquareCenter(key, asWhite, bounds) {
  const pos = key2pos(key);
  if (!asWhite) {
    pos[0] = 7 - pos[0];
    pos[1] = 7 - pos[1];
  }
  return [
    bounds.left + bounds.width * pos[0] / 8 + bounds.width / 16,
    bounds.top + bounds.height * (7 - pos[1]) / 8 + bounds.height / 16
  ];
}

// node_modules/chessground/dist/premove.js
var diff = (a, b) => Math.abs(a - b);
var pawn = (color) => (x1, y1, x2, y2) => diff(x1, x2) < 2 && (color === "white" ? (
  // allow 2 squares from first two ranks, for horde
  y2 === y1 + 1 || y1 <= 1 && y2 === y1 + 2 && x1 === x2
) : y2 === y1 - 1 || y1 >= 6 && y2 === y1 - 2 && x1 === x2);
var knight = (x1, y1, x2, y2) => {
  const xd = diff(x1, x2);
  const yd = diff(y1, y2);
  return xd === 1 && yd === 2 || xd === 2 && yd === 1;
};
var bishop = (x1, y1, x2, y2) => {
  return diff(x1, x2) === diff(y1, y2);
};
var rook = (x1, y1, x2, y2) => {
  return x1 === x2 || y1 === y2;
};
var queen = (x1, y1, x2, y2) => {
  return bishop(x1, y1, x2, y2) || rook(x1, y1, x2, y2);
};
var king = (color, rookFiles, canCastle) => (x1, y1, x2, y2) => diff(x1, x2) < 2 && diff(y1, y2) < 2 || canCastle && y1 === y2 && y1 === (color === "white" ? 0 : 7) && (x1 === 4 && (x2 === 2 && rookFiles.includes(0) || x2 === 6 && rookFiles.includes(7)) || rookFiles.includes(x2));
function rookFilesOf(pieces, color) {
  const backrank = color === "white" ? "1" : "8";
  const files2 = [];
  for (const [key, piece] of pieces) {
    if (key[1] === backrank && piece.color === color && piece.role === "rook") {
      files2.push(key2pos(key)[0]);
    }
  }
  return files2;
}
function premove(pieces, key, canCastle) {
  const piece = pieces.get(key);
  if (!piece)
    return [];
  const pos = key2pos(key), r = piece.role, mobility = r === "pawn" ? pawn(piece.color) : r === "knight" ? knight : r === "bishop" ? bishop : r === "rook" ? rook : r === "queen" ? queen : king(piece.color, rookFilesOf(pieces, piece.color), canCastle);
  return allPos.filter((pos2) => (pos[0] !== pos2[0] || pos[1] !== pos2[1]) && mobility(pos[0], pos[1], pos2[0], pos2[1])).map(pos2key);
}

// node_modules/chessground/dist/board.js
function callUserFunction(f, ...args) {
  if (f)
    setTimeout(() => f(...args), 1);
}
function toggleOrientation(state) {
  state.orientation = opposite(state.orientation);
  state.animation.current = state.draggable.current = state.selected = void 0;
}
function setPieces(state, pieces) {
  for (const [key, piece] of pieces) {
    if (piece)
      state.pieces.set(key, piece);
    else
      state.pieces.delete(key);
  }
}
function setCheck(state, color) {
  state.check = void 0;
  if (color === true)
    color = state.turnColor;
  if (color)
    for (const [k, p] of state.pieces) {
      if (p.role === "king" && p.color === color) {
        state.check = k;
      }
    }
}
function setPremove(state, orig, dest, meta) {
  unsetPredrop(state);
  state.premovable.current = [orig, dest];
  callUserFunction(state.premovable.events.set, orig, dest, meta);
}
function unsetPremove(state) {
  if (state.premovable.current) {
    state.premovable.current = void 0;
    callUserFunction(state.premovable.events.unset);
  }
}
function setPredrop(state, role, key) {
  unsetPremove(state);
  state.predroppable.current = { role, key };
  callUserFunction(state.predroppable.events.set, role, key);
}
function unsetPredrop(state) {
  const pd = state.predroppable;
  if (pd.current) {
    pd.current = void 0;
    callUserFunction(pd.events.unset);
  }
}
function tryAutoCastle(state, orig, dest) {
  if (!state.autoCastle)
    return false;
  const king2 = state.pieces.get(orig);
  if (!king2 || king2.role !== "king")
    return false;
  const origPos = key2pos(orig);
  const destPos = key2pos(dest);
  if (origPos[1] !== 0 && origPos[1] !== 7 || origPos[1] !== destPos[1])
    return false;
  if (origPos[0] === 4 && !state.pieces.has(dest)) {
    if (destPos[0] === 6)
      dest = pos2key([7, destPos[1]]);
    else if (destPos[0] === 2)
      dest = pos2key([0, destPos[1]]);
  }
  const rook2 = state.pieces.get(dest);
  if (!rook2 || rook2.color !== king2.color || rook2.role !== "rook")
    return false;
  state.pieces.delete(orig);
  state.pieces.delete(dest);
  if (origPos[0] < destPos[0]) {
    state.pieces.set(pos2key([6, destPos[1]]), king2);
    state.pieces.set(pos2key([5, destPos[1]]), rook2);
  } else {
    state.pieces.set(pos2key([2, destPos[1]]), king2);
    state.pieces.set(pos2key([3, destPos[1]]), rook2);
  }
  return true;
}
function baseMove(state, orig, dest) {
  const origPiece = state.pieces.get(orig), destPiece = state.pieces.get(dest);
  if (orig === dest || !origPiece)
    return false;
  const captured = destPiece && destPiece.color !== origPiece.color ? destPiece : void 0;
  if (dest === state.selected)
    unselect(state);
  callUserFunction(state.events.move, orig, dest, captured);
  if (!tryAutoCastle(state, orig, dest)) {
    state.pieces.set(dest, origPiece);
    state.pieces.delete(orig);
  }
  state.lastMove = [orig, dest];
  state.check = void 0;
  callUserFunction(state.events.change);
  return captured || true;
}
function baseNewPiece(state, piece, key, force) {
  if (state.pieces.has(key)) {
    if (force)
      state.pieces.delete(key);
    else
      return false;
  }
  callUserFunction(state.events.dropNewPiece, piece, key);
  state.pieces.set(key, piece);
  state.lastMove = [key];
  state.check = void 0;
  callUserFunction(state.events.change);
  state.movable.dests = void 0;
  state.turnColor = opposite(state.turnColor);
  return true;
}
function baseUserMove(state, orig, dest) {
  const result = baseMove(state, orig, dest);
  if (result) {
    state.movable.dests = void 0;
    state.turnColor = opposite(state.turnColor);
    state.animation.current = void 0;
  }
  return result;
}
function userMove(state, orig, dest) {
  if (canMove(state, orig, dest)) {
    const result = baseUserMove(state, orig, dest);
    if (result) {
      const holdTime = state.hold.stop();
      unselect(state);
      const metadata = {
        premove: false,
        ctrlKey: state.stats.ctrlKey,
        holdTime
      };
      if (result !== true)
        metadata.captured = result;
      callUserFunction(state.movable.events.after, orig, dest, metadata);
      return true;
    }
  } else if (canPremove(state, orig, dest)) {
    setPremove(state, orig, dest, {
      ctrlKey: state.stats.ctrlKey
    });
    unselect(state);
    return true;
  }
  unselect(state);
  return false;
}
function dropNewPiece(state, orig, dest, force) {
  const piece = state.pieces.get(orig);
  if (piece && (canDrop(state, orig, dest) || force)) {
    state.pieces.delete(orig);
    baseNewPiece(state, piece, dest, force);
    callUserFunction(state.movable.events.afterNewPiece, piece.role, dest, {
      premove: false,
      predrop: false
    });
  } else if (piece && canPredrop(state, orig, dest)) {
    setPredrop(state, piece.role, dest);
  } else {
    unsetPremove(state);
    unsetPredrop(state);
  }
  state.pieces.delete(orig);
  unselect(state);
}
function selectSquare(state, key, force) {
  callUserFunction(state.events.select, key);
  if (state.selected) {
    if (state.selected === key && !state.draggable.enabled) {
      unselect(state);
      state.hold.cancel();
      return;
    } else if ((state.selectable.enabled || force) && state.selected !== key) {
      if (userMove(state, state.selected, key)) {
        state.stats.dragged = false;
        return;
      }
    }
  }
  if ((state.selectable.enabled || state.draggable.enabled) && (isMovable(state, key) || isPremovable(state, key))) {
    setSelected(state, key);
    state.hold.start();
  }
}
function setSelected(state, key) {
  state.selected = key;
  if (isPremovable(state, key)) {
    if (!state.premovable.customDests) {
      state.premovable.dests = premove(state.pieces, key, state.premovable.castle);
    }
  } else
    state.premovable.dests = void 0;
}
function unselect(state) {
  state.selected = void 0;
  state.premovable.dests = void 0;
  state.hold.cancel();
}
function isMovable(state, orig) {
  const piece = state.pieces.get(orig);
  return !!piece && (state.movable.color === "both" || state.movable.color === piece.color && state.turnColor === piece.color);
}
var canMove = (state, orig, dest) => {
  var _a, _b;
  return orig !== dest && isMovable(state, orig) && (state.movable.free || !!((_b = (_a = state.movable.dests) === null || _a === void 0 ? void 0 : _a.get(orig)) === null || _b === void 0 ? void 0 : _b.includes(dest)));
};
function canDrop(state, orig, dest) {
  const piece = state.pieces.get(orig);
  return !!piece && (orig === dest || !state.pieces.has(dest)) && (state.movable.color === "both" || state.movable.color === piece.color && state.turnColor === piece.color);
}
function isPremovable(state, orig) {
  const piece = state.pieces.get(orig);
  return !!piece && state.premovable.enabled && state.movable.color === piece.color && state.turnColor !== piece.color;
}
function canPremove(state, orig, dest) {
  var _a, _b;
  const validPremoves = (_b = (_a = state.premovable.customDests) === null || _a === void 0 ? void 0 : _a.get(orig)) !== null && _b !== void 0 ? _b : premove(state.pieces, orig, state.premovable.castle);
  return orig !== dest && isPremovable(state, orig) && validPremoves.includes(dest);
}
function canPredrop(state, orig, dest) {
  const piece = state.pieces.get(orig);
  const destPiece = state.pieces.get(dest);
  return !!piece && (!destPiece || destPiece.color !== state.movable.color) && state.predroppable.enabled && (piece.role !== "pawn" || dest[1] !== "1" && dest[1] !== "8") && state.movable.color === piece.color && state.turnColor !== piece.color;
}
function isDraggable(state, orig) {
  const piece = state.pieces.get(orig);
  return !!piece && state.draggable.enabled && (state.movable.color === "both" || state.movable.color === piece.color && (state.turnColor === piece.color || state.premovable.enabled));
}
function playPremove(state) {
  const move3 = state.premovable.current;
  if (!move3)
    return false;
  const orig = move3[0], dest = move3[1];
  let success = false;
  if (canMove(state, orig, dest)) {
    const result = baseUserMove(state, orig, dest);
    if (result) {
      const metadata = { premove: true };
      if (result !== true)
        metadata.captured = result;
      callUserFunction(state.movable.events.after, orig, dest, metadata);
      success = true;
    }
  }
  unsetPremove(state);
  return success;
}
function playPredrop(state, validate) {
  const drop2 = state.predroppable.current;
  let success = false;
  if (!drop2)
    return false;
  if (validate(drop2)) {
    const piece = {
      role: drop2.role,
      color: state.movable.color
    };
    if (baseNewPiece(state, piece, drop2.key)) {
      callUserFunction(state.movable.events.afterNewPiece, drop2.role, drop2.key, {
        premove: false,
        predrop: true
      });
      success = true;
    }
  }
  unsetPredrop(state);
  return success;
}
function cancelMove(state) {
  unsetPremove(state);
  unsetPredrop(state);
  unselect(state);
}
function stop(state) {
  state.movable.color = state.movable.dests = state.animation.current = void 0;
  cancelMove(state);
}
function getKeyAtDomPos(pos, asWhite, bounds) {
  let file2 = Math.floor(8 * (pos[0] - bounds.left) / bounds.width);
  if (!asWhite)
    file2 = 7 - file2;
  let rank2 = 7 - Math.floor(8 * (pos[1] - bounds.top) / bounds.height);
  if (!asWhite)
    rank2 = 7 - rank2;
  return file2 >= 0 && file2 < 8 && rank2 >= 0 && rank2 < 8 ? pos2key([file2, rank2]) : void 0;
}
function getSnappedKeyAtDomPos(orig, pos, asWhite, bounds) {
  const origPos = key2pos(orig);
  const validSnapPos = allPos.filter((pos2) => queen(origPos[0], origPos[1], pos2[0], pos2[1]) || knight(origPos[0], origPos[1], pos2[0], pos2[1]));
  const validSnapCenters = validSnapPos.map((pos2) => computeSquareCenter(pos2key(pos2), asWhite, bounds));
  const validSnapDistances = validSnapCenters.map((pos2) => distanceSq(pos, pos2));
  const [, closestSnapIndex] = validSnapDistances.reduce((a, b, index) => a[0] < b ? a : [b, index], [validSnapDistances[0], 0]);
  return pos2key(validSnapPos[closestSnapIndex]);
}
var whitePov = (s) => s.orientation === "white";

// node_modules/chessground/dist/fen.js
var initial = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";
var roles = {
  p: "pawn",
  r: "rook",
  n: "knight",
  b: "bishop",
  q: "queen",
  k: "king"
};
var letters = {
  pawn: "p",
  rook: "r",
  knight: "n",
  bishop: "b",
  queen: "q",
  king: "k"
};
function read(fen) {
  if (fen === "start")
    fen = initial;
  const pieces = /* @__PURE__ */ new Map();
  let row = 7, col = 0;
  for (const c of fen) {
    switch (c) {
      case " ":
      case "[":
        return pieces;
      case "/":
        --row;
        if (row < 0)
          return pieces;
        col = 0;
        break;
      case "~": {
        const piece = pieces.get(pos2key([col - 1, row]));
        if (piece)
          piece.promoted = true;
        break;
      }
      default: {
        const nb = c.charCodeAt(0);
        if (nb < 57)
          col += nb - 48;
        else {
          const role = c.toLowerCase();
          pieces.set(pos2key([col, row]), {
            role: roles[role],
            color: c === role ? "black" : "white"
          });
          ++col;
        }
      }
    }
  }
  return pieces;
}
function write(pieces) {
  return invRanks.map((y) => files.map((x) => {
    const piece = pieces.get(x + y);
    if (piece) {
      let p = letters[piece.role];
      if (piece.color === "white")
        p = p.toUpperCase();
      if (piece.promoted)
        p += "~";
      return p;
    } else
      return "1";
  }).join("")).join("/").replace(/1{2,}/g, (s) => s.length.toString());
}

// node_modules/chessground/dist/config.js
function applyAnimation(state, config) {
  if (config.animation) {
    deepMerge(state.animation, config.animation);
    if ((state.animation.duration || 0) < 70)
      state.animation.enabled = false;
  }
}
function configure(state, config) {
  var _a, _b, _c;
  if ((_a = config.movable) === null || _a === void 0 ? void 0 : _a.dests)
    state.movable.dests = void 0;
  if ((_b = config.drawable) === null || _b === void 0 ? void 0 : _b.autoShapes)
    state.drawable.autoShapes = [];
  deepMerge(state, config);
  if (config.fen) {
    state.pieces = read(config.fen);
    state.drawable.shapes = ((_c = config.drawable) === null || _c === void 0 ? void 0 : _c.shapes) || [];
  }
  if ("check" in config)
    setCheck(state, config.check || false);
  if ("lastMove" in config && !config.lastMove)
    state.lastMove = void 0;
  else if (config.lastMove)
    state.lastMove = config.lastMove;
  if (state.selected)
    setSelected(state, state.selected);
  applyAnimation(state, config);
  if (!state.movable.rookCastle && state.movable.dests) {
    const rank2 = state.movable.color === "white" ? "1" : "8", kingStartPos = "e" + rank2, dests = state.movable.dests.get(kingStartPos), king2 = state.pieces.get(kingStartPos);
    if (!dests || !king2 || king2.role !== "king")
      return;
    state.movable.dests.set(kingStartPos, dests.filter((d) => !(d === "a" + rank2 && dests.includes("c" + rank2)) && !(d === "h" + rank2 && dests.includes("g" + rank2))));
  }
}
function deepMerge(base, extend) {
  for (const key in extend) {
    if (key === "__proto__" || key === "constructor" || !Object.prototype.hasOwnProperty.call(extend, key))
      continue;
    if (Object.prototype.hasOwnProperty.call(base, key) && isPlainObject(base[key]) && isPlainObject(extend[key]))
      deepMerge(base[key], extend[key]);
    else
      base[key] = extend[key];
  }
}
function isPlainObject(o) {
  if (typeof o !== "object" || o === null)
    return false;
  const proto = Object.getPrototypeOf(o);
  return proto === Object.prototype || proto === null;
}

// node_modules/chessground/dist/anim.js
var anim = (mutation, state) => state.animation.enabled ? animate(mutation, state) : render(mutation, state);
function render(mutation, state) {
  const result = mutation(state);
  state.dom.redraw();
  return result;
}
var makePiece = (key, piece) => ({
  key,
  pos: key2pos(key),
  piece
});
var closer = (piece, pieces) => pieces.sort((p1, p2) => distanceSq(piece.pos, p1.pos) - distanceSq(piece.pos, p2.pos))[0];
function computePlan(prevPieces, current) {
  const anims = /* @__PURE__ */ new Map(), animedOrigs = [], fadings = /* @__PURE__ */ new Map(), missings = [], news = [], prePieces = /* @__PURE__ */ new Map();
  let curP, preP, vector;
  for (const [k, p] of prevPieces) {
    prePieces.set(k, makePiece(k, p));
  }
  for (const key of allKeys) {
    curP = current.pieces.get(key);
    preP = prePieces.get(key);
    if (curP) {
      if (preP) {
        if (!samePiece(curP, preP.piece)) {
          missings.push(preP);
          news.push(makePiece(key, curP));
        }
      } else
        news.push(makePiece(key, curP));
    } else if (preP)
      missings.push(preP);
  }
  for (const newP of news) {
    preP = closer(newP, missings.filter((p) => samePiece(newP.piece, p.piece)));
    if (preP) {
      vector = [preP.pos[0] - newP.pos[0], preP.pos[1] - newP.pos[1]];
      anims.set(newP.key, vector.concat(vector));
      animedOrigs.push(preP.key);
    }
  }
  for (const p of missings) {
    if (!animedOrigs.includes(p.key))
      fadings.set(p.key, p.piece);
  }
  return {
    anims,
    fadings
  };
}
function step(state, now) {
  const cur = state.animation.current;
  if (cur === void 0) {
    if (!state.dom.destroyed)
      state.dom.redrawNow();
    return;
  }
  const rest = 1 - (now - cur.start) * cur.frequency;
  if (rest <= 0) {
    state.animation.current = void 0;
    state.dom.redrawNow();
  } else {
    const ease = easing(rest);
    for (const cfg of cur.plan.anims.values()) {
      cfg[2] = cfg[0] * ease;
      cfg[3] = cfg[1] * ease;
    }
    state.dom.redrawNow(true);
    requestAnimationFrame((now2 = performance.now()) => step(state, now2));
  }
}
function animate(mutation, state) {
  const prevPieces = new Map(state.pieces);
  const result = mutation(state);
  const plan = computePlan(prevPieces, state);
  if (plan.anims.size || plan.fadings.size) {
    const alreadyRunning = state.animation.current && state.animation.current.start;
    state.animation.current = {
      start: performance.now(),
      frequency: 1 / state.animation.duration,
      plan
    };
    if (!alreadyRunning)
      step(state, performance.now());
  } else {
    state.dom.redraw();
  }
  return result;
}
var easing = (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

// node_modules/chessground/dist/draw.js
var brushes = ["green", "red", "blue", "yellow"];
function start(state, e) {
  if (e.touches && e.touches.length > 1)
    return;
  e.stopPropagation();
  e.preventDefault();
  e.ctrlKey ? unselect(state) : cancelMove(state);
  const pos = eventPosition(e), orig = getKeyAtDomPos(pos, whitePov(state), state.dom.bounds());
  if (!orig)
    return;
  state.drawable.current = {
    orig,
    pos,
    brush: eventBrush(e),
    snapToValidMove: state.drawable.defaultSnapToValidMove
  };
  processDraw(state);
}
function processDraw(state) {
  requestAnimationFrame(() => {
    const cur = state.drawable.current;
    if (cur) {
      const keyAtDomPos = getKeyAtDomPos(cur.pos, whitePov(state), state.dom.bounds());
      if (!keyAtDomPos) {
        cur.snapToValidMove = false;
      }
      const mouseSq = cur.snapToValidMove ? getSnappedKeyAtDomPos(cur.orig, cur.pos, whitePov(state), state.dom.bounds()) : keyAtDomPos;
      if (mouseSq !== cur.mouseSq) {
        cur.mouseSq = mouseSq;
        cur.dest = mouseSq !== cur.orig ? mouseSq : void 0;
        state.dom.redrawNow();
      }
      processDraw(state);
    }
  });
}
function move(state, e) {
  if (state.drawable.current)
    state.drawable.current.pos = eventPosition(e);
}
function end(state) {
  const cur = state.drawable.current;
  if (cur) {
    if (cur.mouseSq)
      addShape(state.drawable, cur);
    cancel(state);
  }
}
function cancel(state) {
  if (state.drawable.current) {
    state.drawable.current = void 0;
    state.dom.redraw();
  }
}
function clear(state) {
  if (state.drawable.shapes.length) {
    state.drawable.shapes = [];
    state.dom.redraw();
    onChange(state.drawable);
  }
}
function eventBrush(e) {
  var _a;
  const modA = (e.shiftKey || e.ctrlKey) && isRightButton(e);
  const modB = e.altKey || e.metaKey || ((_a = e.getModifierState) === null || _a === void 0 ? void 0 : _a.call(e, "AltGraph"));
  return brushes[(modA ? 1 : 0) + (modB ? 2 : 0)];
}
function addShape(drawable, cur) {
  const sameShape = (s) => s.orig === cur.orig && s.dest === cur.dest;
  const similar = drawable.shapes.find(sameShape);
  if (similar)
    drawable.shapes = drawable.shapes.filter((s) => !sameShape(s));
  if (!similar || similar.brush !== cur.brush)
    drawable.shapes.push({
      orig: cur.orig,
      dest: cur.dest,
      brush: cur.brush
    });
  onChange(drawable);
}
function onChange(drawable) {
  if (drawable.onChange)
    drawable.onChange(drawable.shapes);
}

// node_modules/chessground/dist/drag.js
function start2(s, e) {
  if (!(s.trustAllEvents || e.isTrusted))
    return;
  if (e.buttons !== void 0 && e.buttons > 1)
    return;
  if (e.touches && e.touches.length > 1)
    return;
  const bounds = s.dom.bounds(), position = eventPosition(e), orig = getKeyAtDomPos(position, whitePov(s), bounds);
  if (!orig)
    return;
  const piece = s.pieces.get(orig);
  const previouslySelected = s.selected;
  if (!previouslySelected && s.drawable.enabled && (s.drawable.eraseOnClick || !piece || piece.color !== s.turnColor))
    clear(s);
  if (e.cancelable !== false && (!e.touches || s.blockTouchScroll || piece || previouslySelected || pieceCloseTo(s, position)))
    e.preventDefault();
  else if (e.touches)
    return;
  const hadPremove = !!s.premovable.current;
  const hadPredrop = !!s.predroppable.current;
  s.stats.ctrlKey = e.ctrlKey;
  if (s.selected && canMove(s, s.selected, orig)) {
    anim((state) => selectSquare(state, orig), s);
  } else {
    selectSquare(s, orig);
  }
  const stillSelected = s.selected === orig;
  const element = pieceElementByKey(s, orig);
  if (piece && element && stillSelected && isDraggable(s, orig)) {
    s.draggable.current = {
      orig,
      piece,
      origPos: position,
      pos: position,
      started: s.draggable.autoDistance && s.stats.dragged,
      element,
      previouslySelected,
      originTarget: e.target,
      keyHasChanged: false
    };
    element.cgDragging = true;
    element.classList.add("dragging");
    const ghost = s.dom.elements.ghost;
    if (ghost) {
      ghost.className = `ghost ${piece.color} ${piece.role}`;
      translate(ghost, posToTranslate(bounds)(key2pos(orig), whitePov(s)));
      setVisible(ghost, true);
    }
    processDrag(s);
  } else {
    if (hadPremove)
      unsetPremove(s);
    if (hadPredrop)
      unsetPredrop(s);
  }
  s.dom.redraw();
}
function pieceCloseTo(s, pos) {
  const asWhite = whitePov(s), bounds = s.dom.bounds(), radiusSq = Math.pow(bounds.width / 8, 2);
  for (const key of s.pieces.keys()) {
    const center = computeSquareCenter(key, asWhite, bounds);
    if (distanceSq(center, pos) <= radiusSq)
      return true;
  }
  return false;
}
function dragNewPiece(s, piece, e, force) {
  const key = "a0";
  s.pieces.set(key, piece);
  s.dom.redraw();
  const position = eventPosition(e);
  s.draggable.current = {
    orig: key,
    piece,
    origPos: position,
    pos: position,
    started: true,
    element: () => pieceElementByKey(s, key),
    originTarget: e.target,
    newPiece: true,
    force: !!force,
    keyHasChanged: false
  };
  processDrag(s);
}
function processDrag(s) {
  requestAnimationFrame(() => {
    var _a;
    const cur = s.draggable.current;
    if (!cur)
      return;
    if ((_a = s.animation.current) === null || _a === void 0 ? void 0 : _a.plan.anims.has(cur.orig))
      s.animation.current = void 0;
    const origPiece = s.pieces.get(cur.orig);
    if (!origPiece || !samePiece(origPiece, cur.piece))
      cancel2(s);
    else {
      if (!cur.started && distanceSq(cur.pos, cur.origPos) >= Math.pow(s.draggable.distance, 2))
        cur.started = true;
      if (cur.started) {
        if (typeof cur.element === "function") {
          const found = cur.element();
          if (!found)
            return;
          found.cgDragging = true;
          found.classList.add("dragging");
          cur.element = found;
        }
        const bounds = s.dom.bounds();
        translate(cur.element, [
          cur.pos[0] - bounds.left - bounds.width / 16,
          cur.pos[1] - bounds.top - bounds.height / 16
        ]);
        cur.keyHasChanged || (cur.keyHasChanged = cur.orig !== getKeyAtDomPos(cur.pos, whitePov(s), bounds));
      }
    }
    processDrag(s);
  });
}
function move2(s, e) {
  if (s.draggable.current && (!e.touches || e.touches.length < 2)) {
    s.draggable.current.pos = eventPosition(e);
  }
}
function end2(s, e) {
  const cur = s.draggable.current;
  if (!cur)
    return;
  if (e.type === "touchend" && e.cancelable !== false)
    e.preventDefault();
  if (e.type === "touchend" && cur.originTarget !== e.target && !cur.newPiece) {
    s.draggable.current = void 0;
    return;
  }
  unsetPremove(s);
  unsetPredrop(s);
  const eventPos = eventPosition(e) || cur.pos;
  const dest = getKeyAtDomPos(eventPos, whitePov(s), s.dom.bounds());
  if (dest && cur.started && cur.orig !== dest) {
    if (cur.newPiece)
      dropNewPiece(s, cur.orig, dest, cur.force);
    else {
      s.stats.ctrlKey = e.ctrlKey;
      if (userMove(s, cur.orig, dest))
        s.stats.dragged = true;
    }
  } else if (cur.newPiece) {
    s.pieces.delete(cur.orig);
  } else if (s.draggable.deleteOnDropOff && !dest) {
    s.pieces.delete(cur.orig);
    callUserFunction(s.events.change);
  }
  if ((cur.orig === cur.previouslySelected || cur.keyHasChanged) && (cur.orig === dest || !dest))
    unselect(s);
  else if (!s.selectable.enabled)
    unselect(s);
  removeDragElements(s);
  s.draggable.current = void 0;
  s.dom.redraw();
}
function cancel2(s) {
  const cur = s.draggable.current;
  if (cur) {
    if (cur.newPiece)
      s.pieces.delete(cur.orig);
    s.draggable.current = void 0;
    unselect(s);
    removeDragElements(s);
    s.dom.redraw();
  }
}
function removeDragElements(s) {
  const e = s.dom.elements;
  if (e.ghost)
    setVisible(e.ghost, false);
}
function pieceElementByKey(s, key) {
  let el = s.dom.elements.board.firstChild;
  while (el) {
    if (el.cgKey === key && el.tagName === "PIECE")
      return el;
    el = el.nextSibling;
  }
  return;
}

// node_modules/chessground/dist/explosion.js
function explosion(state, keys) {
  state.exploding = { stage: 1, keys };
  state.dom.redraw();
  setTimeout(() => {
    setStage(state, 2);
    setTimeout(() => setStage(state, void 0), 120);
  }, 120);
}
function setStage(state, stage) {
  if (state.exploding) {
    if (stage)
      state.exploding.stage = stage;
    else
      state.exploding = void 0;
    state.dom.redraw();
  }
}

// node_modules/chessground/dist/api.js
function start3(state, redrawAll) {
  function toggleOrientation2() {
    toggleOrientation(state);
    redrawAll();
  }
  return {
    set(config) {
      if (config.orientation && config.orientation !== state.orientation)
        toggleOrientation2();
      applyAnimation(state, config);
      (config.fen ? anim : render)((state2) => configure(state2, config), state);
    },
    state,
    getFen: () => write(state.pieces),
    toggleOrientation: toggleOrientation2,
    setPieces(pieces) {
      anim((state2) => setPieces(state2, pieces), state);
    },
    selectSquare(key, force) {
      if (key)
        anim((state2) => selectSquare(state2, key, force), state);
      else if (state.selected) {
        unselect(state);
        state.dom.redraw();
      }
    },
    move(orig, dest) {
      anim((state2) => baseMove(state2, orig, dest), state);
    },
    newPiece(piece, key) {
      anim((state2) => baseNewPiece(state2, piece, key), state);
    },
    playPremove() {
      if (state.premovable.current) {
        if (anim(playPremove, state))
          return true;
        state.dom.redraw();
      }
      return false;
    },
    playPredrop(validate) {
      if (state.predroppable.current) {
        const result = playPredrop(state, validate);
        state.dom.redraw();
        return result;
      }
      return false;
    },
    cancelPremove() {
      render(unsetPremove, state);
    },
    cancelPredrop() {
      render(unsetPredrop, state);
    },
    cancelMove() {
      render((state2) => {
        cancelMove(state2);
        cancel2(state2);
      }, state);
    },
    stop() {
      render((state2) => {
        stop(state2);
        cancel2(state2);
      }, state);
    },
    explode(keys) {
      explosion(state, keys);
    },
    setAutoShapes(shapes) {
      render((state2) => state2.drawable.autoShapes = shapes, state);
    },
    setShapes(shapes) {
      render((state2) => state2.drawable.shapes = shapes, state);
    },
    getKeyAtDomPos(pos) {
      return getKeyAtDomPos(pos, whitePov(state), state.dom.bounds());
    },
    redrawAll,
    dragNewPiece(piece, event, force) {
      dragNewPiece(state, piece, event, force);
    },
    destroy() {
      stop(state);
      state.dom.unbind && state.dom.unbind();
      state.dom.destroyed = true;
    }
  };
}

// node_modules/chessground/dist/state.js
function defaults() {
  return {
    pieces: read(initial),
    orientation: "white",
    turnColor: "white",
    coordinates: true,
    coordinatesOnSquares: false,
    ranksPosition: "right",
    autoCastle: true,
    viewOnly: false,
    disableContextMenu: false,
    addPieceZIndex: false,
    blockTouchScroll: false,
    pieceKey: false,
    trustAllEvents: false,
    highlight: {
      lastMove: true,
      check: true
    },
    animation: {
      enabled: true,
      duration: 200
    },
    movable: {
      free: true,
      color: "both",
      showDests: true,
      events: {},
      rookCastle: true
    },
    premovable: {
      enabled: true,
      showDests: true,
      castle: true,
      events: {}
    },
    predroppable: {
      enabled: false,
      events: {}
    },
    draggable: {
      enabled: true,
      distance: 3,
      autoDistance: true,
      showGhost: true,
      deleteOnDropOff: false
    },
    dropmode: {
      active: false
    },
    selectable: {
      enabled: true
    },
    stats: {
      // on touchscreen, default to "tap-tap" moves
      // instead of drag
      dragged: !("ontouchstart" in window)
    },
    events: {},
    drawable: {
      enabled: true,
      // can draw
      visible: true,
      // can view
      defaultSnapToValidMove: true,
      eraseOnClick: true,
      shapes: [],
      autoShapes: [],
      brushes: {
        green: { key: "g", color: "#15781B", opacity: 1, lineWidth: 10 },
        red: { key: "r", color: "#882020", opacity: 1, lineWidth: 10 },
        blue: { key: "b", color: "#003088", opacity: 1, lineWidth: 10 },
        yellow: { key: "y", color: "#e68f00", opacity: 1, lineWidth: 10 },
        paleBlue: { key: "pb", color: "#003088", opacity: 0.4, lineWidth: 15 },
        paleGreen: { key: "pg", color: "#15781B", opacity: 0.4, lineWidth: 15 },
        paleRed: { key: "pr", color: "#882020", opacity: 0.4, lineWidth: 15 },
        paleGrey: {
          key: "pgr",
          color: "#4a4a4a",
          opacity: 0.35,
          lineWidth: 15
        },
        purple: { key: "purple", color: "#68217a", opacity: 0.65, lineWidth: 10 },
        pink: { key: "pink", color: "#ee2080", opacity: 0.5, lineWidth: 10 },
        white: { key: "white", color: "white", opacity: 1, lineWidth: 10 }
      },
      prevSvgHash: ""
    },
    hold: timer()
  };
}

// node_modules/chessground/dist/svg.js
var hilites = {
  hilitePrimary: { key: "hilitePrimary", color: "#3291ff", opacity: 1, lineWidth: 1 },
  hiliteWhite: { key: "hiliteWhite", color: "#ffffff", opacity: 1, lineWidth: 1 }
};
function createDefs() {
  const defs = createElement("defs");
  const filter = setAttributes(createElement("filter"), { id: "cg-filter-blur" });
  filter.appendChild(setAttributes(createElement("feGaussianBlur"), { stdDeviation: "0.019" }));
  defs.appendChild(filter);
  return defs;
}
function renderSvg(state, shapesEl, customsEl) {
  var _a;
  const d = state.drawable, curD = d.current, cur = curD && curD.mouseSq ? curD : void 0, dests = /* @__PURE__ */ new Map(), bounds = state.dom.bounds(), nonPieceAutoShapes = d.autoShapes.filter((autoShape) => !autoShape.piece);
  for (const s of d.shapes.concat(nonPieceAutoShapes).concat(cur ? [cur] : [])) {
    if (!s.dest)
      continue;
    const sources = (_a = dests.get(s.dest)) !== null && _a !== void 0 ? _a : /* @__PURE__ */ new Set(), from = pos2user(orient(key2pos(s.orig), state.orientation), bounds), to = pos2user(orient(key2pos(s.dest), state.orientation), bounds);
    sources.add(moveAngle(from, to));
    dests.set(s.dest, sources);
  }
  const shapes = d.shapes.concat(nonPieceAutoShapes).map((s) => {
    return {
      shape: s,
      current: false,
      hash: shapeHash(s, isShort(s.dest, dests), false, bounds)
    };
  });
  if (cur)
    shapes.push({
      shape: cur,
      current: true,
      hash: shapeHash(cur, isShort(cur.dest, dests), true, bounds)
    });
  const fullHash = shapes.map((sc) => sc.hash).join(";");
  if (fullHash === state.drawable.prevSvgHash)
    return;
  state.drawable.prevSvgHash = fullHash;
  const defsEl = shapesEl.querySelector("defs");
  syncDefs(d, shapes, defsEl);
  syncShapes(shapes, shapesEl.querySelector("g"), customsEl.querySelector("g"), (s) => renderShape(state, s, d.brushes, dests, bounds));
}
function syncDefs(d, shapes, defsEl) {
  var _a;
  const brushes2 = /* @__PURE__ */ new Map();
  let brush;
  for (const s of shapes.filter((s2) => s2.shape.dest && s2.shape.brush)) {
    brush = makeCustomBrush(d.brushes[s.shape.brush], s.shape.modifiers);
    if ((_a = s.shape.modifiers) === null || _a === void 0 ? void 0 : _a.hilite)
      brushes2.set(hilite(brush).key, hilite(brush));
    brushes2.set(brush.key, brush);
  }
  const keysInDom = /* @__PURE__ */ new Set();
  let el = defsEl.firstElementChild;
  while (el) {
    keysInDom.add(el.getAttribute("cgKey"));
    el = el.nextElementSibling;
  }
  for (const [key, brush2] of brushes2.entries()) {
    if (!keysInDom.has(key))
      defsEl.appendChild(renderMarker(brush2));
  }
}
function syncShapes(syncables, shapes, customs, renderShape3) {
  const hashesInDom = /* @__PURE__ */ new Map();
  for (const sc of syncables)
    hashesInDom.set(sc.hash, false);
  for (const root of [shapes, customs]) {
    const toRemove = [];
    let el = root.firstElementChild, elHash;
    while (el) {
      elHash = el.getAttribute("cgHash");
      if (hashesInDom.has(elHash))
        hashesInDom.set(elHash, true);
      else
        toRemove.push(el);
      el = el.nextElementSibling;
    }
    for (const el2 of toRemove)
      root.removeChild(el2);
  }
  for (const sc of syncables.filter((s) => !hashesInDom.get(s.hash))) {
    for (const svg of renderShape3(sc)) {
      if (svg.isCustom)
        customs.appendChild(svg.el);
      else
        shapes.appendChild(svg.el);
    }
  }
}
function shapeHash({ orig, dest, brush, piece, modifiers, customSvg, label }, shorten, current, bounds) {
  var _a, _b;
  return [
    bounds.width,
    bounds.height,
    current,
    orig,
    dest,
    brush,
    shorten && "-",
    piece && pieceHash(piece),
    modifiers && modifiersHash(modifiers),
    customSvg && `custom-${textHash(customSvg.html)},${(_b = (_a = customSvg.center) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : "o"}`,
    label && `label-${textHash(label.text)}`
  ].filter((x) => x).join(",");
}
function pieceHash(piece) {
  return [piece.color, piece.role, piece.scale].filter((x) => x).join(",");
}
function modifiersHash(m) {
  return [m.lineWidth, m.hilite && "*"].filter((x) => x).join(",");
}
function textHash(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h << 5) - h + s.charCodeAt(i) >>> 0;
  }
  return h.toString();
}
function renderShape(state, { shape, current, hash: hash2 }, brushes2, dests, bounds) {
  var _a, _b;
  const from = pos2user(orient(key2pos(shape.orig), state.orientation), bounds), to = shape.dest ? pos2user(orient(key2pos(shape.dest), state.orientation), bounds) : from, brush = shape.brush && makeCustomBrush(brushes2[shape.brush], shape.modifiers), slots = dests.get(shape.dest), svgs = [];
  if (brush) {
    const el = setAttributes(createElement("g"), { cgHash: hash2 });
    svgs.push({ el });
    if (from[0] !== to[0] || from[1] !== to[1])
      el.appendChild(renderArrow(shape, brush, from, to, current, isShort(shape.dest, dests)));
    else
      el.appendChild(renderCircle(brushes2[shape.brush], from, current, bounds));
  }
  if (shape.label) {
    const label = shape.label;
    (_a = label.fill) !== null && _a !== void 0 ? _a : label.fill = shape.brush && brushes2[shape.brush].color;
    const corner = shape.brush ? void 0 : "tr";
    svgs.push({ el: renderLabel(label, hash2, from, to, slots, corner), isCustom: true });
  }
  if (shape.customSvg) {
    const on = (_b = shape.customSvg.center) !== null && _b !== void 0 ? _b : "orig";
    const [x, y] = on === "label" ? labelCoords(from, to, slots).map((c) => c - 0.5) : on === "dest" ? to : from;
    const el = setAttributes(createElement("g"), { transform: `translate(${x},${y})`, cgHash: hash2 });
    el.innerHTML = `<svg width="1" height="1" viewBox="0 0 100 100">${shape.customSvg.html}</svg>`;
    svgs.push({ el, isCustom: true });
  }
  return svgs;
}
function renderCircle(brush, at, current, bounds) {
  const widths = circleWidth(), radius = (bounds.width + bounds.height) / (4 * Math.max(bounds.width, bounds.height));
  return setAttributes(createElement("circle"), {
    stroke: brush.color,
    "stroke-width": widths[current ? 0 : 1],
    fill: "none",
    opacity: opacity(brush, current),
    cx: at[0],
    cy: at[1],
    r: radius - widths[1] / 2
  });
}
function hilite(brush) {
  return ["#ffffff", "#fff", "white"].includes(brush.color) ? hilites["hilitePrimary"] : hilites["hiliteWhite"];
}
function renderArrow(s, brush, from, to, current, shorten) {
  var _a;
  function renderLine(isHilite) {
    var _a2;
    const m = arrowMargin(shorten && !current), dx = to[0] - from[0], dy = to[1] - from[1], angle = Math.atan2(dy, dx), xo = Math.cos(angle) * m, yo = Math.sin(angle) * m;
    return setAttributes(createElement("line"), {
      stroke: isHilite ? hilite(brush).color : brush.color,
      "stroke-width": lineWidth(brush, current) + (isHilite ? 0.04 : 0),
      "stroke-linecap": "round",
      "marker-end": `url(#arrowhead-${isHilite ? hilite(brush).key : brush.key})`,
      opacity: ((_a2 = s.modifiers) === null || _a2 === void 0 ? void 0 : _a2.hilite) ? 1 : opacity(brush, current),
      x1: from[0],
      y1: from[1],
      x2: to[0] - xo,
      y2: to[1] - yo
    });
  }
  if (!((_a = s.modifiers) === null || _a === void 0 ? void 0 : _a.hilite))
    return renderLine(false);
  const g = createElement("g");
  const blurred = setAttributes(createElement("g"), { filter: "url(#cg-filter-blur)" });
  blurred.appendChild(filterBox(from, to));
  blurred.appendChild(renderLine(true));
  g.appendChild(blurred);
  g.appendChild(renderLine(false));
  return g;
}
function renderMarker(brush) {
  const marker = setAttributes(createElement("marker"), {
    id: "arrowhead-" + brush.key,
    orient: "auto",
    overflow: "visible",
    markerWidth: 4,
    markerHeight: 4,
    refX: brush.key.startsWith("hilite") ? 1.86 : 2.05,
    refY: 2
  });
  marker.appendChild(setAttributes(createElement("path"), {
    d: "M0,0 V4 L3,2 Z",
    fill: brush.color
  }));
  marker.setAttribute("cgKey", brush.key);
  return marker;
}
function renderLabel(label, hash2, from, to, slots, corner) {
  var _a;
  const labelSize = 0.4, fontSize = labelSize * 0.75 ** label.text.length, at = labelCoords(from, to, slots), cornerOff = corner === "tr" ? 0.4 : 0, g = setAttributes(createElement("g"), {
    transform: `translate(${at[0] + cornerOff},${at[1] - cornerOff})`,
    cgHash: hash2
  });
  g.appendChild(setAttributes(createElement("circle"), {
    r: labelSize / 2,
    "fill-opacity": corner ? 1 : 0.8,
    "stroke-opacity": corner ? 1 : 0.7,
    "stroke-width": 0.03,
    fill: (_a = label.fill) !== null && _a !== void 0 ? _a : "#666",
    stroke: "white"
  }));
  const labelEl = setAttributes(createElement("text"), {
    "font-size": fontSize,
    "font-family": "Noto Sans",
    "text-anchor": "middle",
    fill: "white",
    y: 0.13 * 0.75 ** label.text.length
  });
  labelEl.innerHTML = label.text;
  g.appendChild(labelEl);
  return g;
}
function orient(pos, color) {
  return color === "white" ? pos : [7 - pos[0], 7 - pos[1]];
}
function isShort(dest, dests) {
  return true === (dest && dests.has(dest) && dests.get(dest).size > 1);
}
function createElement(tagName) {
  return document.createElementNS("http://www.w3.org/2000/svg", tagName);
}
function setAttributes(el, attrs) {
  for (const key in attrs) {
    if (Object.prototype.hasOwnProperty.call(attrs, key))
      el.setAttribute(key, attrs[key]);
  }
  return el;
}
function makeCustomBrush(base, modifiers) {
  return !modifiers ? base : {
    color: base.color,
    opacity: Math.round(base.opacity * 10) / 10,
    lineWidth: Math.round(modifiers.lineWidth || base.lineWidth),
    key: [base.key, modifiers.lineWidth].filter((x) => x).join("")
  };
}
function circleWidth() {
  return [3 / 64, 4 / 64];
}
function lineWidth(brush, current) {
  return (brush.lineWidth || 10) * (current ? 0.85 : 1) / 64;
}
function opacity(brush, current) {
  return (brush.opacity || 1) * (current ? 0.9 : 1);
}
function arrowMargin(shorten) {
  return (shorten ? 20 : 10) / 64;
}
function pos2user(pos, bounds) {
  const xScale = Math.min(1, bounds.width / bounds.height);
  const yScale = Math.min(1, bounds.height / bounds.width);
  return [(pos[0] - 3.5) * xScale, (3.5 - pos[1]) * yScale];
}
function filterBox(from, to) {
  const box = {
    from: [Math.floor(Math.min(from[0], to[0])), Math.floor(Math.min(from[1], to[1]))],
    to: [Math.ceil(Math.max(from[0], to[0])), Math.ceil(Math.max(from[1], to[1]))]
  };
  return setAttributes(createElement("rect"), {
    x: box.from[0],
    y: box.from[1],
    width: box.to[0] - box.from[0],
    height: box.to[1] - box.from[1],
    fill: "none",
    stroke: "none"
  });
}
function moveAngle(from, to, asSlot = true) {
  const angle = Math.atan2(to[1] - from[1], to[0] - from[0]) + Math.PI;
  return asSlot ? (Math.round(angle * 8 / Math.PI) + 16) % 16 : angle;
}
function dist(from, to) {
  return Math.sqrt([from[0] - to[0], from[1] - to[1]].reduce((acc, x) => acc + x * x, 0));
}
function labelCoords(from, to, slots) {
  let mag = dist(from, to);
  const angle = moveAngle(from, to, false);
  if (slots) {
    mag -= 33 / 64;
    if (slots.size > 1) {
      mag -= 10 / 64;
      const slot = moveAngle(from, to);
      if (slots.has((slot + 1) % 16) || slots.has((slot + 15) % 16)) {
        if (slot & 1)
          mag -= 0.4;
      }
    }
  }
  return [from[0] - Math.cos(angle) * mag, from[1] - Math.sin(angle) * mag].map((c) => c + 0.5);
}

// node_modules/chessground/dist/wrap.js
function renderWrap(element, s) {
  element.innerHTML = "";
  element.classList.add("cg-wrap");
  for (const c of colors)
    element.classList.toggle("orientation-" + c, s.orientation === c);
  element.classList.toggle("manipulable", !s.viewOnly);
  const container = createEl("cg-container");
  element.appendChild(container);
  const board = createEl("cg-board");
  container.appendChild(board);
  let svg;
  let customSvg;
  let autoPieces;
  if (s.drawable.visible) {
    svg = setAttributes(createElement("svg"), {
      class: "cg-shapes",
      viewBox: "-4 -4 8 8",
      preserveAspectRatio: "xMidYMid slice"
    });
    svg.appendChild(createDefs());
    svg.appendChild(createElement("g"));
    customSvg = setAttributes(createElement("svg"), {
      class: "cg-custom-svgs",
      viewBox: "-3.5 -3.5 8 8",
      preserveAspectRatio: "xMidYMid slice"
    });
    customSvg.appendChild(createElement("g"));
    autoPieces = createEl("cg-auto-pieces");
    container.appendChild(svg);
    container.appendChild(customSvg);
    container.appendChild(autoPieces);
  }
  if (s.coordinates) {
    const orientClass = s.orientation === "black" ? " black" : "";
    const ranksPositionClass = s.ranksPosition === "left" ? " left" : "";
    if (s.coordinatesOnSquares) {
      const rankN = s.orientation === "white" ? (i) => i + 1 : (i) => 8 - i;
      files.forEach((f, i) => container.appendChild(renderCoords(ranks.map((r) => f + r), "squares rank" + rankN(i) + orientClass + ranksPositionClass)));
    } else {
      container.appendChild(renderCoords(ranks, "ranks" + orientClass + ranksPositionClass));
      container.appendChild(renderCoords(files, "files" + orientClass));
    }
  }
  let ghost;
  if (s.draggable.enabled && s.draggable.showGhost) {
    ghost = createEl("piece", "ghost");
    setVisible(ghost, false);
    container.appendChild(ghost);
  }
  return {
    board,
    container,
    wrap: element,
    ghost,
    svg,
    customSvg,
    autoPieces
  };
}
function renderCoords(elems, className) {
  const el = createEl("coords", className);
  let f;
  for (const elem of elems) {
    f = createEl("coord");
    f.textContent = elem;
    el.appendChild(f);
  }
  return el;
}

// node_modules/chessground/dist/drop.js
function drop(s, e) {
  if (!s.dropmode.active)
    return;
  unsetPremove(s);
  unsetPredrop(s);
  const piece = s.dropmode.piece;
  if (piece) {
    s.pieces.set("a0", piece);
    const position = eventPosition(e);
    const dest = position && getKeyAtDomPos(position, whitePov(s), s.dom.bounds());
    if (dest)
      dropNewPiece(s, "a0", dest);
  }
  s.dom.redraw();
}

// node_modules/chessground/dist/events.js
function bindBoard(s, onResize) {
  const boardEl = s.dom.elements.board;
  if ("ResizeObserver" in window)
    new ResizeObserver(onResize).observe(s.dom.elements.wrap);
  if (s.disableContextMenu || s.drawable.enabled) {
    boardEl.addEventListener("contextmenu", (e) => e.preventDefault());
  }
  if (s.viewOnly)
    return;
  const onStart = startDragOrDraw(s);
  boardEl.addEventListener("touchstart", onStart, {
    passive: false
  });
  boardEl.addEventListener("mousedown", onStart, {
    passive: false
  });
}
function bindDocument(s, onResize) {
  const unbinds = [];
  if (!("ResizeObserver" in window))
    unbinds.push(unbindable(document.body, "chessground.resize", onResize));
  if (!s.viewOnly) {
    const onmove = dragOrDraw(s, move2, move);
    const onend = dragOrDraw(s, end2, end);
    for (const ev of ["touchmove", "mousemove"])
      unbinds.push(unbindable(document, ev, onmove));
    for (const ev of ["touchend", "mouseup"])
      unbinds.push(unbindable(document, ev, onend));
    const onScroll = () => s.dom.bounds.clear();
    unbinds.push(unbindable(document, "scroll", onScroll, { capture: true, passive: true }));
    unbinds.push(unbindable(window, "resize", onScroll, { passive: true }));
  }
  return () => unbinds.forEach((f) => f());
}
function unbindable(el, eventName, callback, options) {
  el.addEventListener(eventName, callback, options);
  return () => el.removeEventListener(eventName, callback, options);
}
var startDragOrDraw = (s) => (e) => {
  if (s.draggable.current)
    cancel2(s);
  else if (s.drawable.current)
    cancel(s);
  else if (e.shiftKey || isRightButton(e)) {
    if (s.drawable.enabled)
      start(s, e);
  } else if (!s.viewOnly) {
    if (s.dropmode.active)
      drop(s, e);
    else
      start2(s, e);
  }
};
var dragOrDraw = (s, withDrag, withDraw) => (e) => {
  if (s.drawable.current) {
    if (s.drawable.enabled)
      withDraw(s, e);
  } else if (!s.viewOnly)
    withDrag(s, e);
};

// node_modules/chessground/dist/render.js
function render2(s) {
  const asWhite = whitePov(s), posToTranslate2 = posToTranslate(s.dom.bounds()), boardEl = s.dom.elements.board, pieces = s.pieces, curAnim = s.animation.current, anims = curAnim ? curAnim.plan.anims : /* @__PURE__ */ new Map(), fadings = curAnim ? curAnim.plan.fadings : /* @__PURE__ */ new Map(), curDrag = s.draggable.current, squares = computeSquareClasses(s), samePieces = /* @__PURE__ */ new Set(), sameSquares = /* @__PURE__ */ new Set(), movedPieces = /* @__PURE__ */ new Map(), movedSquares = /* @__PURE__ */ new Map();
  let k, el, pieceAtKey, elPieceName, anim2, fading, pMvdset, pMvd, sMvdset, sMvd;
  el = boardEl.firstChild;
  while (el) {
    k = el.cgKey;
    if (isPieceNode(el)) {
      pieceAtKey = pieces.get(k);
      anim2 = anims.get(k);
      fading = fadings.get(k);
      elPieceName = el.cgPiece;
      if (el.cgDragging && (!curDrag || curDrag.orig !== k)) {
        el.classList.remove("dragging");
        translate(el, posToTranslate2(key2pos(k), asWhite));
        el.cgDragging = false;
      }
      if (!fading && el.cgFading) {
        el.cgFading = false;
        el.classList.remove("fading");
      }
      if (pieceAtKey) {
        if (anim2 && el.cgAnimating && elPieceName === pieceNameOf(pieceAtKey)) {
          const pos = key2pos(k);
          pos[0] += anim2[2];
          pos[1] += anim2[3];
          el.classList.add("anim");
          translate(el, posToTranslate2(pos, asWhite));
        } else if (el.cgAnimating) {
          el.cgAnimating = false;
          el.classList.remove("anim");
          translate(el, posToTranslate2(key2pos(k), asWhite));
          if (s.addPieceZIndex)
            el.style.zIndex = posZIndex(key2pos(k), asWhite);
        }
        if (elPieceName === pieceNameOf(pieceAtKey) && (!fading || !el.cgFading)) {
          samePieces.add(k);
        } else {
          if (fading && elPieceName === pieceNameOf(fading)) {
            el.classList.add("fading");
            el.cgFading = true;
          } else {
            appendValue(movedPieces, elPieceName, el);
          }
        }
      } else {
        appendValue(movedPieces, elPieceName, el);
      }
    } else if (isSquareNode(el)) {
      const cn = el.className;
      if (squares.get(k) === cn)
        sameSquares.add(k);
      else
        appendValue(movedSquares, cn, el);
    }
    el = el.nextSibling;
  }
  for (const [sk, className] of squares) {
    if (!sameSquares.has(sk)) {
      sMvdset = movedSquares.get(className);
      sMvd = sMvdset && sMvdset.pop();
      const translation = posToTranslate2(key2pos(sk), asWhite);
      if (sMvd) {
        sMvd.cgKey = sk;
        translate(sMvd, translation);
      } else {
        const squareNode = createEl("square", className);
        squareNode.cgKey = sk;
        translate(squareNode, translation);
        boardEl.insertBefore(squareNode, boardEl.firstChild);
      }
    }
  }
  for (const [k2, p] of pieces) {
    anim2 = anims.get(k2);
    if (!samePieces.has(k2)) {
      pMvdset = movedPieces.get(pieceNameOf(p));
      pMvd = pMvdset && pMvdset.pop();
      if (pMvd) {
        pMvd.cgKey = k2;
        if (pMvd.cgFading) {
          pMvd.classList.remove("fading");
          pMvd.cgFading = false;
        }
        const pos = key2pos(k2);
        if (s.addPieceZIndex)
          pMvd.style.zIndex = posZIndex(pos, asWhite);
        if (anim2) {
          pMvd.cgAnimating = true;
          pMvd.classList.add("anim");
          pos[0] += anim2[2];
          pos[1] += anim2[3];
        }
        translate(pMvd, posToTranslate2(pos, asWhite));
      } else {
        const pieceName = pieceNameOf(p), pieceNode = createEl("piece", pieceName), pos = key2pos(k2);
        pieceNode.cgPiece = pieceName;
        pieceNode.cgKey = k2;
        if (anim2) {
          pieceNode.cgAnimating = true;
          pos[0] += anim2[2];
          pos[1] += anim2[3];
        }
        translate(pieceNode, posToTranslate2(pos, asWhite));
        if (s.addPieceZIndex)
          pieceNode.style.zIndex = posZIndex(pos, asWhite);
        boardEl.appendChild(pieceNode);
      }
    }
  }
  for (const nodes of movedPieces.values())
    removeNodes(s, nodes);
  for (const nodes of movedSquares.values())
    removeNodes(s, nodes);
}
function renderResized(s) {
  const asWhite = whitePov(s), posToTranslate2 = posToTranslate(s.dom.bounds());
  let el = s.dom.elements.board.firstChild;
  while (el) {
    if (isPieceNode(el) && !el.cgAnimating || isSquareNode(el)) {
      translate(el, posToTranslate2(key2pos(el.cgKey), asWhite));
    }
    el = el.nextSibling;
  }
}
function updateBounds(s) {
  var _a, _b;
  const bounds = s.dom.elements.wrap.getBoundingClientRect();
  const container = s.dom.elements.container;
  const ratio = bounds.height / bounds.width;
  const width = Math.floor(bounds.width * window.devicePixelRatio / 8) * 8 / window.devicePixelRatio;
  const height = width * ratio;
  container.style.width = width + "px";
  container.style.height = height + "px";
  s.dom.bounds.clear();
  (_a = s.addDimensionsCssVarsTo) === null || _a === void 0 ? void 0 : _a.style.setProperty("---cg-width", width + "px");
  (_b = s.addDimensionsCssVarsTo) === null || _b === void 0 ? void 0 : _b.style.setProperty("---cg-height", height + "px");
}
var isPieceNode = (el) => el.tagName === "PIECE";
var isSquareNode = (el) => el.tagName === "SQUARE";
function removeNodes(s, nodes) {
  for (const node of nodes)
    s.dom.elements.board.removeChild(node);
}
function posZIndex(pos, asWhite) {
  const minZ = 3;
  const rank2 = pos[1];
  const z = asWhite ? minZ + 7 - rank2 : minZ + rank2;
  return `${z}`;
}
var pieceNameOf = (piece) => `${piece.color} ${piece.role}`;
function computeSquareClasses(s) {
  var _a, _b, _c;
  const squares = /* @__PURE__ */ new Map();
  if (s.lastMove && s.highlight.lastMove)
    for (const k of s.lastMove) {
      addSquare(squares, k, "last-move");
    }
  if (s.check && s.highlight.check)
    addSquare(squares, s.check, "check");
  if (s.selected) {
    addSquare(squares, s.selected, "selected");
    if (s.movable.showDests) {
      const dests = (_a = s.movable.dests) === null || _a === void 0 ? void 0 : _a.get(s.selected);
      if (dests)
        for (const k of dests) {
          addSquare(squares, k, "move-dest" + (s.pieces.has(k) ? " oc" : ""));
        }
      const pDests = (_c = (_b = s.premovable.customDests) === null || _b === void 0 ? void 0 : _b.get(s.selected)) !== null && _c !== void 0 ? _c : s.premovable.dests;
      if (pDests)
        for (const k of pDests) {
          addSquare(squares, k, "premove-dest" + (s.pieces.has(k) ? " oc" : ""));
        }
    }
  }
  const premove2 = s.premovable.current;
  if (premove2)
    for (const k of premove2)
      addSquare(squares, k, "current-premove");
  else if (s.predroppable.current)
    addSquare(squares, s.predroppable.current.key, "current-premove");
  const o = s.exploding;
  if (o)
    for (const k of o.keys)
      addSquare(squares, k, "exploding" + o.stage);
  if (s.highlight.custom) {
    s.highlight.custom.forEach((v, k) => {
      addSquare(squares, k, v);
    });
  }
  return squares;
}
function addSquare(squares, key, klass) {
  const classes = squares.get(key);
  if (classes)
    squares.set(key, `${classes} ${klass}`);
  else
    squares.set(key, klass);
}
function appendValue(map, key, value) {
  const arr = map.get(key);
  if (arr)
    arr.push(value);
  else
    map.set(key, [value]);
}

// node_modules/chessground/dist/sync.js
function syncShapes2(shapes, root, renderShape3) {
  const hashesInDom = /* @__PURE__ */ new Map(), toRemove = [];
  for (const sc of shapes)
    hashesInDom.set(sc.hash, false);
  let el = root.firstElementChild, elHash;
  while (el) {
    elHash = el.getAttribute("cgHash");
    if (hashesInDom.has(elHash))
      hashesInDom.set(elHash, true);
    else
      toRemove.push(el);
    el = el.nextElementSibling;
  }
  for (const el2 of toRemove)
    root.removeChild(el2);
  for (const sc of shapes) {
    if (!hashesInDom.get(sc.hash))
      root.appendChild(renderShape3(sc));
  }
}

// node_modules/chessground/dist/autoPieces.js
function render3(state, autoPieceEl) {
  const autoPieces = state.drawable.autoShapes.filter((autoShape) => autoShape.piece);
  const autoPieceShapes = autoPieces.map((s) => {
    return {
      shape: s,
      hash: hash(s),
      current: false
    };
  });
  syncShapes2(autoPieceShapes, autoPieceEl, (shape) => renderShape2(state, shape, state.dom.bounds()));
}
function renderResized2(state) {
  var _a;
  const asWhite = whitePov(state), posToTranslate2 = posToTranslate(state.dom.bounds());
  let el = (_a = state.dom.elements.autoPieces) === null || _a === void 0 ? void 0 : _a.firstChild;
  while (el) {
    translateAndScale(el, posToTranslate2(key2pos(el.cgKey), asWhite), el.cgScale);
    el = el.nextSibling;
  }
}
function renderShape2(state, { shape, hash: hash2 }, bounds) {
  var _a, _b, _c;
  const orig = shape.orig;
  const role = (_a = shape.piece) === null || _a === void 0 ? void 0 : _a.role;
  const color = (_b = shape.piece) === null || _b === void 0 ? void 0 : _b.color;
  const scale = (_c = shape.piece) === null || _c === void 0 ? void 0 : _c.scale;
  const pieceEl = createEl("piece", `${role} ${color}`);
  pieceEl.setAttribute("cgHash", hash2);
  pieceEl.cgKey = orig;
  pieceEl.cgScale = scale;
  translateAndScale(pieceEl, posToTranslate(bounds)(key2pos(orig), whitePov(state)), scale);
  return pieceEl;
}
var hash = (autoPiece) => {
  var _a, _b, _c;
  return [autoPiece.orig, (_a = autoPiece.piece) === null || _a === void 0 ? void 0 : _a.role, (_b = autoPiece.piece) === null || _b === void 0 ? void 0 : _b.color, (_c = autoPiece.piece) === null || _c === void 0 ? void 0 : _c.scale].join(",");
};

// node_modules/chessground/dist/chessground.js
function Chessground(element, config) {
  const maybeState = defaults();
  configure(maybeState, config || {});
  function redrawAll() {
    const prevUnbind = "dom" in maybeState ? maybeState.dom.unbind : void 0;
    const elements = renderWrap(element, maybeState), bounds = memo(() => elements.board.getBoundingClientRect()), redrawNow = (skipSvg) => {
      render2(state);
      if (elements.autoPieces)
        render3(state, elements.autoPieces);
      if (!skipSvg && elements.svg)
        renderSvg(state, elements.svg, elements.customSvg);
    }, onResize = () => {
      updateBounds(state);
      renderResized(state);
      if (elements.autoPieces)
        renderResized2(state);
    };
    const state = maybeState;
    state.dom = {
      elements,
      bounds,
      redraw: debounceRedraw(redrawNow),
      redrawNow,
      unbind: prevUnbind
    };
    state.drawable.prevSvgHash = "";
    updateBounds(state);
    redrawNow(false);
    bindBoard(state, onResize);
    if (!prevUnbind)
      state.dom.unbind = bindDocument(state, onResize);
    state.events.insert && state.events.insert(elements);
    return state;
  }
  return start3(redrawAll(), redrawAll);
}
function debounceRedraw(redrawNow) {
  let redrawing = false;
  return () => {
    if (redrawing)
      return;
    redrawing = true;
    requestAnimationFrame(() => {
      redrawNow();
      redrawing = false;
    });
  };
}

// src/utils.ts
function isValidSquare(sq) {
  return /^[a-h][1-8]$/.test(sq);
}
function getValidMoves(chess) {
  const dests = /* @__PURE__ */ new Map();
  const allMoves = chess.moves({ verbose: true });
  for (const move3 of allMoves) {
    const from = move3.from;
    const existing = dests.get(from);
    if (existing) {
      existing.push(move3.to);
    } else {
      dests.set(from, [move3.to]);
    }
  }
  return dests;
}
function isInCheck(chess) {
  try {
    return chess.in_check();
  } catch {
    return false;
  }
}
function squareToPosition(square, isFlipped) {
  if (square.length !== 2)
    return null;
  const file2 = square.charCodeAt(0) - 97;
  const rank2 = parseInt(square[1]) - 1;
  if (file2 < 0 || file2 > 7 || rank2 < 0 || rank2 > 7)
    return null;
  let x, y;
  if (isFlipped) {
    x = (7 - file2) * SQUARE_SIZE_PERCENT;
    y = rank2 * SQUARE_SIZE_PERCENT;
  } else {
    x = file2 * SQUARE_SIZE_PERCENT;
    y = (7 - rank2) * SQUARE_SIZE_PERCENT;
  }
  return { x, y };
}

// src/board-manager.ts
var BoardManager = class {
  constructor(container, settings, data, isFlipped) {
    this.ground = null;
    this.boardEl = null;
    this.boardWrapperEl = null;
    this.nagOverlayEl = null;
    this.resizeObserver = null;
    this._appliedStyleProps = [];
    this.container = container;
    this.settings = settings;
    this.data = data;
    this.isFlipped = isFlipped;
  }
  createBoard(boardSection) {
    this.boardWrapperEl = boardSection;
    this.boardEl = boardSection.createDiv({ cls: "cv-board cg-wrap" });
    this.applyBoardSize();
    this.setInitialBoardDimensions();
    this.createNagOverlay(boardSection);
    this.setupResizeObserver();
  }
  setInitialBoardDimensions() {
    if (!this.boardEl)
      return;
    let width;
    switch (this.settings.boardSize) {
      case "small":
        width = 280;
        break;
      case "large":
        width = 480;
        break;
      case "auto": {
        const elWidth = this.boardEl.clientWidth;
        width = elWidth > 0 ? elWidth : this.container.parentElement?.clientWidth ?? 360;
        break;
      }
      case "medium":
      default:
        width = 360;
        break;
    }
    this.boardEl.style.height = `${width}px`;
    this.container.style.setProperty("--cv-board-height", `${width}px`);
    this.container.style.setProperty("--cv-board-width", `${width}px`);
  }
  initChessground(chess, onUserMove) {
    if (!this.boardEl)
      return;
    const isEditable = this.data.isEditable && !this.data.isStatic && !this.data.isPuzzle;
    const config = {
      fen: chess.fen(),
      orientation: this.isFlipped ? "black" : "white",
      viewOnly: this.data.isStatic,
      coordinates: this.settings.showCoordinates,
      highlight: { lastMove: true, check: true },
      animation: {
        enabled: this.settings.animationSpeed > 0,
        duration: this.settings.animationSpeed
      },
      movable: isEditable && onUserMove ? {
        free: false,
        color: "both",
        dests: getValidMoves(chess),
        showDests: true,
        events: { after: onUserMove }
      } : { free: false, color: void 0 },
      premovable: { enabled: false },
      drawable: {
        enabled: true,
        visible: true,
        autoShapes: this.getAutoShapes(null, 0)
      }
    };
    this.ground = Chessground(this.boardEl, config);
  }
  syncBoard(chess, lastMove, options) {
    if (!this.ground)
      return;
    const inCheck = isInCheck(chess);
    this.ground.set({
      fen: chess.fen(),
      turnColor: chess.turn() === "w" ? "white" : "black",
      check: inCheck,
      lastMove: lastMove ? [lastMove.from, lastMove.to] : void 0,
      movable: options?.movable,
      drawable: {
        autoShapes: this.getAutoShapes(
          options?.moves ?? null,
          options?.currentMoveIndex ?? 0
        )
      }
    });
  }
  syncAfterMove(chess, move3, moves, currentMoveIndex) {
    if (!this.ground)
      return;
    const inCheck = isInCheck(chess);
    this.ground.set({
      fen: chess.fen(),
      turnColor: chess.turn() === "w" ? "white" : "black",
      check: inCheck,
      lastMove: [move3.from, move3.to],
      movable: {
        color: "both",
        dests: getValidMoves(chess)
      },
      drawable: {
        autoShapes: this.getAutoShapes(moves, currentMoveIndex)
      }
    });
  }
  syncPuzzleBoard(chess, playedMoves) {
    if (!this.ground)
      return;
    const inCheck = isInCheck(chess);
    const lastPlayed = playedMoves.length > 0 ? playedMoves[playedMoves.length - 1] : null;
    const showLastMove = lastPlayed && lastPlayed.comment !== "wrong" ? [lastPlayed.from, lastPlayed.to] : void 0;
    this.ground.set({
      fen: chess.fen(),
      turnColor: chess.turn() === "w" ? "white" : "black",
      check: inCheck,
      lastMove: showLastMove,
      drawable: { autoShapes: this.getAutoShapes(null, 0) }
    });
  }
  enablePuzzleInput(chess, playerColor, handler) {
    if (!this.ground)
      return;
    this.ground.set({
      movable: {
        free: false,
        color: playerColor,
        dests: getValidMoves(chess),
        showDests: true,
        events: { after: handler }
      }
    });
  }
  disableInput() {
    if (!this.ground)
      return;
    this.ground.set({
      movable: { color: void 0, dests: /* @__PURE__ */ new Map() }
    });
  }
  setEditableMovable(chess, handler) {
    if (!this.ground)
      return;
    this.ground.set({
      movable: {
        free: false,
        color: "both",
        dests: getValidMoves(chess),
        showDests: true,
        events: { after: handler }
      }
    });
  }
  get flipped() {
    return this.isFlipped;
  }
  flipBoard() {
    this.isFlipped = !this.isFlipped;
    this.ground?.toggleOrientation();
  }
  getAutoShapes(moves, currentMoveIndex) {
    const shapes = [];
    const defaultArrowColor = this.settings.arrowColor || "green";
    const defaultCircleColor = this.settings.circleColor || "green";
    for (const arrow of this.data.arrows) {
      if (isValidSquare(arrow.from) && isValidSquare(arrow.to)) {
        shapes.push({
          orig: arrow.from,
          dest: arrow.to,
          brush: arrow.color || defaultArrowColor
        });
      }
    }
    for (const circle of this.data.circles) {
      if (isValidSquare(circle.square)) {
        shapes.push({
          orig: circle.square,
          brush: circle.color || defaultCircleColor
        });
      }
    }
    if (!this.data.isPuzzle && moves && currentMoveIndex > 0 && moves[currentMoveIndex - 1]?.annotations) {
      const ann = moves[currentMoveIndex - 1].annotations;
      for (const arrow of ann.arrows) {
        if (isValidSquare(arrow.from) && isValidSquare(arrow.to)) {
          shapes.push({
            orig: arrow.from,
            dest: arrow.to,
            brush: arrow.color || defaultArrowColor
          });
        }
      }
      for (const circle of ann.circles) {
        if (isValidSquare(circle.square)) {
          shapes.push({
            orig: circle.square,
            brush: circle.color || defaultCircleColor
          });
        }
      }
    }
    return shapes;
  }
  setAutoShapes(shapes) {
    this.ground?.setAutoShapes([...shapes]);
  }
  showHintHighlight(square, moves, currentMoveIndex, durationMs) {
    if (!this.ground)
      return;
    const baseShapes = this.getAutoShapes(moves, currentMoveIndex);
    this.ground.setAutoShapes([
      ...baseShapes,
      { orig: square, brush: "yellow" }
    ]);
    setTimeout(() => {
      if (this.ground) {
        this.ground.setAutoShapes(this.getAutoShapes(moves, currentMoveIndex));
      }
    }, durationMs);
  }
  createNagOverlay(boardSection) {
    this.nagOverlayEl = boardSection.createDiv({ cls: "cv-nag-overlay" });
  }
  updateNagOverlay(moves, currentMoveIndex) {
    if (!this.nagOverlayEl)
      return;
    this.nagOverlayEl.empty();
    if (currentMoveIndex <= 0)
      return;
    const move3 = moves[currentMoveIndex - 1];
    if (!move3?.nag)
      return;
    const def = resolveNag(move3.nag);
    if (!def)
      return;
    const square = move3.to;
    const pos = squareToPosition(square, this.isFlipped);
    if (!pos)
      return;
    const glyph = this.nagOverlayEl.createDiv({
      cls: `cv-nag-glyph ${def.cssClass}`
    });
    glyph.style.left = `${pos.x}%`;
    glyph.style.top = `${pos.y}%`;
    glyph.createSpan({
      cls: "cv-nag-glyph-inner",
      text: def.symbol
    });
  }
  updateNagHighlight(moves, currentMoveIndex) {
    delete this.container.dataset.nagHighlight;
    if (currentMoveIndex <= 0)
      return;
    const move3 = moves[currentMoveIndex - 1];
    if (!move3?.nag)
      return;
    const def = resolveNag(move3.nag);
    if (!def)
      return;
    const highlightName = def.cssClass.replace("nag-", "");
    this.container.dataset.nagHighlight = highlightName;
  }
  applyBoardSize() {
    if (!this.boardEl)
      return;
    const size = this.settings.boardSize;
    this.boardEl.addClass(`cv-board-${size}`);
  }
  setupResizeObserver() {
    if (!this.boardEl)
      return;
    this.resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width;
        if (width > 0 && this.boardEl) {
          this.boardEl.style.height = `${width}px`;
          this.ground?.redrawAll();
          this.container.style.setProperty("--cv-board-height", `${width}px`);
          this.container.style.setProperty("--cv-board-width", `${width}px`);
        }
      }
    });
    if (this.boardEl && this.resizeObserver) {
      this.resizeObserver.observe(this.boardEl);
    }
  }
  applyTheme() {
    const theme = this.settings.boardTheme;
    const colors2 = theme === "custom" ? {
      light: this.settings.lightSquareColor,
      dark: this.settings.darkSquareColor
    } : BOARD_THEMES[theme] ?? BOARD_THEMES["brown"];
    this.container.style.setProperty("--cv-light", colors2.light);
    this.container.style.setProperty("--cv-dark", colors2.dark);
    this._appliedStyleProps.push("--cv-light", "--cv-dark");
    this.container.dataset.theme = theme;
    const lightHex = colors2.light.replace("#", "%23");
    const darkHex = colors2.dark.replace("#", "%23");
    const svg = this.generateBoardSvg(lightHex, darkHex);
    this.container.style.setProperty(
      "--cv-board-svg",
      `url('data:image/svg+xml,${svg}')`
    );
    this._appliedStyleProps.push("--cv-board-svg");
  }
  applyPieceSet() {
    this.container.dataset.pieceSet = this.settings.pieceSet;
  }
  generateBoardSvg(light, dark) {
    const darkSquares = [];
    for (let r = 0; r < 8; r++) {
      for (let f = 0; f < 8; f++) {
        if ((r + f) % 2 === 1) {
          darkSquares.push(`<rect x="${f}" y="${r}" width="1" height="1"/>`);
        }
      }
    }
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8" shape-rendering="crispEdges"><rect width="8" height="8" fill="${light}"/><g fill="${dark}">${darkSquares.join("")}</g></svg>`;
  }
  async getPromotion(chess, orig, dest) {
    const validMoves = chess.moves({ verbose: true });
    const isPromotion = validMoves.some(
      (m) => m.from === orig && m.to === dest && m.flags.includes("p")
    );
    if (!isPromotion)
      return "q";
    return this.showPromotionDialog(
      dest,
      chess.turn() === "w" ? "white" : "black"
    );
  }
  showPromotionDialog(square, color) {
    return new Promise((resolve) => {
      if (!this.boardWrapperEl) {
        resolve("q");
        return;
      }
      const overlay = this.boardWrapperEl.createDiv({
        cls: "cv-promotion-overlay"
      });
      const dialog = overlay.createDiv({ cls: "cv-promotion-dialog cg-wrap" });
      const pos = squareToPosition(square, this.isFlipped);
      if (pos) {
        dialog.style.left = `${pos.x + SQUARE_SIZE_PERCENT / 2}%`;
        dialog.style.top = this.isFlipped ? `${pos.y}%` : `${Math.max(0, pos.y - SQUARE_SIZE_PERCENT * 3)}%`;
      }
      const pieceNames = {
        q: "queen",
        r: "rook",
        b: "bishop",
        n: "knight"
      };
      for (const piece of ["q", "r", "b", "n"]) {
        const btn = dialog.createEl("piece", {
          cls: `cv-promotion-piece ${color} ${pieceNames[piece]}`,
          attr: { "aria-label": pieceNames[piece], title: pieceNames[piece] }
        });
        btn.onclick = (e) => {
          e.stopPropagation();
          overlay.remove();
          resolve(piece);
        };
      }
      overlay.onclick = () => {
        overlay.remove();
        resolve("q");
      };
    });
  }
  destroy() {
    delete this.container.dataset.nagHighlight;
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
    for (const prop of this._appliedStyleProps) {
      this.container.style.removeProperty(prop);
    }
    this._appliedStyleProps = [];
    this.container.style.removeProperty("--cv-board-height");
    this.container.style.removeProperty("--cv-board-width");
    const pieceStyle = this.container.querySelector(".cv-piece-style");
    if (pieceStyle)
      pieceStyle.remove();
    delete this.container.dataset.theme;
    delete this.container.dataset.pieceSet;
    if (this.ground) {
      this.ground.destroy();
      this.ground = null;
    }
    this.boardEl = null;
    this.boardWrapperEl = null;
    this.nagOverlayEl = null;
  }
};

// src/puzzle-controller.ts
var PuzzleController = class {
  constructor(chess, data, settings, board, startFen) {
    this.state = "waiting";
    this.moveIndex = 0;
    this.playedMoves = [];
    this.solutionRevealed = false;
    this.destroyed = false;
    // Navigation state for reviewing played moves
    this.viewIndex = 0;
    this.moveListEl = null;
    this.headerStatusEl = null;
    // Footer button references for updating
    this.hintBtnEl = null;
    this.solutionBtnEl = null;
    this.retryBtnEl = null;
    this.footerRightGroup = null;
    this.chess = chess;
    this.data = data;
    this.settings = settings;
    this.board = board;
    this.startFen = startFen;
  }
  setHeaderStatusEl(el) {
    this.headerStatusEl = el;
  }
  createMoveList(movesSection) {
    this.moveListEl = movesSection.createDiv({ cls: "cv-moves" });
  }
  createFooterButtons(rightGroup) {
    this.footerRightGroup = rightGroup;
    this.updateFooterButtons();
  }
  start() {
    this.state = "waiting";
    this.moveIndex = 0;
    this.viewIndex = 0;
    this.playedMoves = [];
    this.solutionRevealed = false;
    this.destroyed = false;
    this.chess.load(this.startFen);
    this.board.syncPuzzleBoard(this.chess, this.playedMoves);
    this.updateHeaderStatus();
    this.updateFooterButtons();
    this.renderMoveList();
    const fenTurn = this.chess.turn() === "w" ? "white" : "black";
    const firstMoveIsOpponent = fenTurn !== this.data.playerColor;
    if (firstMoveIsOpponent && this.data.solutionMoves.length > 0) {
      setTimeout(() => {
        if (!this.destroyed)
          this.playOpponentMove();
      }, PUZZLE_OPPONENT_FIRST_MOVE_DELAY);
    } else {
      this.state = "playing";
      this.enableInput();
      this.updateHeaderStatus();
      this.updateFooterButtons();
    }
  }
  playOpponentMove() {
    if (this.destroyed)
      return;
    if (this.moveIndex >= this.data.solutionMoves.length)
      return;
    const expectedMove = this.data.solutionMoves[this.moveIndex];
    try {
      const move3 = this.chess.move(expectedMove.san);
      if (move3) {
        this.playedMoves.push({
          san: move3.san,
          from: move3.from,
          to: move3.to,
          fen: this.chess.fen()
        });
        this.moveIndex++;
        this.viewIndex = this.playedMoves.length;
      }
    } catch (err) {
      console.warn(
        "Puzzle: could not play opponent move:",
        expectedMove.san,
        err
      );
    }
    this.board.syncPuzzleBoard(this.chess, this.playedMoves);
    this.renderMoveList();
    if (this.moveIndex < this.data.solutionMoves.length) {
      this.state = "playing";
      this.enableInput();
      this.updateHeaderStatus();
      this.updateFooterButtons();
    } else {
      this.state = "solved";
      this.board.disableInput();
      this.updateHeaderStatus();
      this.updateFooterButtons();
    }
  }
  async handleMove(orig, dest) {
    if (this.state !== "playing")
      return;
    if (this.moveIndex >= this.data.solutionMoves.length)
      return;
    const expected = this.data.solutionMoves[this.moveIndex];
    const promotion = await this.board.getPromotion(this.chess, orig, dest);
    try {
      const move3 = this.chess.move({ from: orig, to: dest, promotion });
      if (!move3) {
        this.board.syncPuzzleBoard(this.chess, this.playedMoves);
        return;
      }
      if (move3.san === expected.san) {
        this.playedMoves.push({
          san: move3.san,
          from: move3.from,
          to: move3.to,
          fen: this.chess.fen()
        });
        this.moveIndex++;
        this.viewIndex = this.playedMoves.length;
        this.board.syncPuzzleBoard(this.chess, this.playedMoves);
        this.renderMoveList();
        if (this.moveIndex >= this.data.solutionMoves.length) {
          this.state = "solved";
          this.board.disableInput();
          this.updateHeaderStatus();
          this.updateFooterButtons();
        } else {
          this.state = "waiting";
          this.board.disableInput();
          this.updateHeaderStatus();
          setTimeout(() => {
            if (!this.destroyed)
              this.playOpponentMove();
          }, PUZZLE_OPPONENT_RESPONSE_DELAY);
        }
      } else {
        this.chess.undo();
        this.state = "failed";
        this.playedMoves.push({
          san: move3.san,
          from: move3.from,
          to: move3.to,
          fen: "",
          comment: "wrong"
        });
        this.viewIndex = this.playedMoves.length;
        this.board.syncPuzzleBoard(this.chess, this.playedMoves);
        this.board.disableInput();
        this.updateHeaderStatus();
        this.updateFooterButtons();
        this.renderMoveList();
      }
    } catch {
      this.board.syncPuzzleBoard(this.chess, this.playedMoves);
    }
  }
  enableInput() {
    this.board.enablePuzzleInput(
      this.chess,
      this.data.playerColor,
      (orig, dest) => {
        void this.handleMove(orig, dest);
      }
    );
  }
  // Navigation methods for reviewing played moves
  goToStart() {
    this.goToView(0);
  }
  goToEnd() {
    this.goToView(this.playedMoves.length);
  }
  goForward() {
    this.goToView(this.viewIndex + 1);
  }
  goBack() {
    this.goToView(this.viewIndex - 1);
  }
  goToView(index) {
    const maxIndex = this.solutionRevealed ? this.data.solutionMoves.length : this.playedMoves.length;
    index = Math.max(0, Math.min(maxIndex, index));
    this.viewIndex = index;
    this.chess.load(this.startFen);
    const moves = this.solutionRevealed ? this.data.solutionMoves : this.playedMoves;
    for (let i = 0; i < index; i++) {
      if (moves[i].comment === "wrong")
        break;
      try {
        this.chess.move(moves[i].san);
      } catch {
        break;
      }
    }
    this.board.syncPuzzleBoard(this.chess, moves.slice(0, index));
    this.updateMoveHighlights();
  }
  retry() {
    this.solutionRevealed = false;
    this.start();
  }
  showSolution() {
    this.solutionRevealed = true;
    this.viewIndex = 0;
    this.renderMoveList();
    this.updateFooterButtons();
  }
  hideSolution() {
    this.solutionRevealed = false;
    this.viewIndex = this.playedMoves.length;
    this.renderMoveList();
    this.updateFooterButtons();
    this.goToView(this.viewIndex);
  }
  showHint() {
    if (this.state !== "playing")
      return;
    if (this.moveIndex >= this.data.solutionMoves.length)
      return;
    const nextMove = this.data.solutionMoves[this.moveIndex];
    const fromSquare = nextMove.from;
    if (fromSquare) {
      this.board.showHintHighlight(
        fromSquare,
        null,
        0,
        HINT_HIGHLIGHT_DURATION
      );
    }
  }
  updateHeaderStatus() {
    if (!this.headerStatusEl)
      return;
    const playerLabel = this.data.playerColor === "white" ? UI_LABELS.playerWhite : UI_LABELS.playerBlack;
    switch (this.state) {
      case "waiting":
        this.headerStatusEl.textContent = UI_LABELS.puzzleHeaderWaiting;
        this.headerStatusEl.className = "cv-header-puzzle-status";
        break;
      case "playing":
        this.headerStatusEl.textContent = UI_LABELS.puzzleHeaderPlaying(playerLabel);
        this.headerStatusEl.className = "cv-header-puzzle-status";
        break;
      case "solved":
        this.headerStatusEl.textContent = UI_LABELS.puzzleHeaderSolved;
        this.headerStatusEl.className = "cv-header-puzzle-status cv-puzzle-solved";
        break;
      case "failed":
        this.headerStatusEl.textContent = UI_LABELS.puzzleHeaderFailed;
        this.headerStatusEl.className = "cv-header-puzzle-status cv-puzzle-failed";
        break;
    }
  }
  updateFooterButtons() {
    if (!this.footerRightGroup)
      return;
    if (this.hintBtnEl) {
      this.hintBtnEl.remove();
      this.hintBtnEl = null;
    }
    if (this.solutionBtnEl) {
      this.solutionBtnEl.remove();
      this.solutionBtnEl = null;
    }
    if (this.retryBtnEl) {
      this.retryBtnEl.remove();
      this.retryBtnEl = null;
    }
    const flipBtn = this.footerRightGroup.querySelector(".cv-btn:not(.cv-puzzle-action)");
    if (this.state === "playing" && this.settings.puzzleShowHints) {
      this.hintBtnEl = this.createPuzzleActionBtn(
        UI_LABELS.hintIcon,
        UI_LABELS.hintTooltip,
        () => this.showHint()
      );
      if (flipBtn) {
        this.footerRightGroup.insertBefore(this.hintBtnEl, flipBtn);
      } else {
        this.footerRightGroup.appendChild(this.hintBtnEl);
      }
    }
    if (this.state !== "solved") {
      if (this.solutionRevealed) {
        this.solutionBtnEl = this.createPuzzleActionBtn(
          UI_LABELS.hideSolutionIcon,
          UI_LABELS.hideSolutionTooltip,
          () => this.hideSolution()
        );
      } else {
        this.solutionBtnEl = this.createPuzzleActionBtn(
          UI_LABELS.showSolutionIcon,
          UI_LABELS.showSolutionTooltip,
          () => this.showSolution()
        );
      }
      if (flipBtn) {
        this.footerRightGroup.insertBefore(this.solutionBtnEl, flipBtn);
      } else {
        this.footerRightGroup.appendChild(this.solutionBtnEl);
      }
    }
    if (this.state === "failed" || this.state === "solved" || this.solutionRevealed) {
      this.retryBtnEl = this.createPuzzleActionBtn(
        UI_LABELS.retryIcon,
        UI_LABELS.retryTooltip,
        () => this.retry()
      );
      if (flipBtn) {
        this.footerRightGroup.insertBefore(this.retryBtnEl, flipBtn);
      } else {
        this.footerRightGroup.appendChild(this.retryBtnEl);
      }
    }
  }
  createPuzzleActionBtn(icon, tooltip, onClick) {
    const btn = document.createElement("button");
    btn.className = "cv-btn cv-puzzle-action";
    btn.setAttribute("aria-label", tooltip);
    btn.setAttribute("title", tooltip);
    btn.textContent = icon;
    btn.onclick = (e) => {
      e.stopPropagation();
      onClick();
    };
    btn.addEventListener("touchstart", (e) => {
      e.stopPropagation();
    });
    btn.addEventListener("touchend", (e) => {
      e.stopPropagation();
    });
    return btn;
  }
  renderMoveList() {
    if (!this.moveListEl)
      return;
    this.moveListEl.empty();
    const list = this.moveListEl.createDiv({ cls: "cv-moves-grid" });
    if (this.solutionRevealed) {
      this.renderMoveRows(list, this.data.solutionMoves, true);
    } else if (this.playedMoves.length === 0) {
      list.createDiv({ cls: "cv-moves-empty", text: UI_LABELS.solvePuzzle });
    } else {
      this.renderMoveRows(list, this.playedMoves, false);
    }
  }
  renderMoveRows(container, moves, isSolution) {
    let startMoveNum = 1;
    let startIsBlack = false;
    if (this.data.fen) {
      const parts = this.data.fen.split(/\s+/);
      startMoveNum = parseInt(parts[5] ?? "1") || 1;
      startIsBlack = parts[1] === "b";
    }
    let moveNum = startMoveNum;
    let i = 0;
    if (startIsBlack && moves.length > 0) {
      container.createSpan({ cls: "cv-move-num", text: `${moveNum}.` });
      container.createSpan({ cls: "cv-move-placeholder", text: UI_LABELS.movePlaceholder });
      const move3 = moves[0];
      const cls = this.getPuzzleMoveClass(move3, 0, isSolution);
      const span = container.createSpan({ cls });
      span.createSpan({ text: this.formatMove(move3.san) });
      span.onclick = () => this.goToView(1);
      i = 1;
      moveNum++;
    }
    while (i < moves.length) {
      container.createSpan({ cls: "cv-move-num", text: `${moveNum}.` });
      const wMove = moves[i];
      const wCls = this.getPuzzleMoveClass(wMove, i, isSolution);
      const wSpan = container.createSpan({ cls: wCls });
      wSpan.createSpan({ text: this.formatMove(wMove.san) });
      const wIdx = i + 1;
      wSpan.onclick = () => this.goToView(wIdx);
      i++;
      if (i < moves.length) {
        const bMove = moves[i];
        const bCls = this.getPuzzleMoveClass(bMove, i, isSolution);
        const bSpan = container.createSpan({ cls: bCls });
        bSpan.createSpan({ text: this.formatMove(bMove.san) });
        const bIdx = i + 1;
        bSpan.onclick = () => this.goToView(bIdx);
        i++;
      } else {
        container.createSpan({ cls: "cv-move-empty" });
      }
      moveNum++;
    }
  }
  getPuzzleMoveClass(move3, index, isSolution) {
    const classes = ["cv-move"];
    if (index === this.viewIndex - 1)
      classes.push("active");
    if (move3.comment === "wrong") {
      classes.push("cv-move-wrong");
    } else if (isSolution) {
      if (index < this.playedMoves.length) {
        classes.push("cv-move-played");
      } else {
        classes.push("cv-move-unplayed");
      }
    }
    return classes.join(" ");
  }
  updateMoveHighlights() {
    if (!this.moveListEl)
      return;
    const moves = this.moveListEl.querySelectorAll(".cv-move");
    moves.forEach((el, i) => {
      el.removeClass("active");
      if (i === this.viewIndex - 1) {
        el.addClass("active");
        el.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    });
  }
  formatMove(san) {
    if (this.settings.notationType === "figurine") {
      return san.replace(/[KQRBN]/g, (m) => FIGURINE_NOTATION[m] ?? m);
    }
    return san;
  }
  destroy() {
    this.destroyed = true;
    this.moveListEl = null;
    this.headerStatusEl = null;
    this.hintBtnEl = null;
    this.solutionBtnEl = null;
    this.retryBtnEl = null;
    this.footerRightGroup = null;
  }
  get currentState() {
    return this.state;
  }
};

// src/navigation-controller.ts
var NavigationController = class {
  constructor(chess, data, settings, board, startFen) {
    this.moveTree = [];
    this.currentLine = [];
    this.currentIndex = 0;
    this.lineStack = [];
    this.isPlaying = false;
    this.playInterval = null;
    this.moveListEl = null;
    this.commentEl = null;
    this.counterEl = null;
    this.playBtnEl = null;
    this.firstBtnEl = null;
    this.prevBtnEl = null;
    this.nextBtnEl = null;
    this.lastBtnEl = null;
    this.destroyed = false;
    this.chess = chess;
    this.data = data;
    this.settings = settings;
    this.board = board;
    this.startFen = startFen;
    if (!data.isPuzzle) {
      this.moveTree = data.moves;
      this.currentLine = this.moveTree;
    }
  }
  createMoveList(movesSection) {
    this.moveListEl = movesSection.createDiv({ cls: "cv-moves" });
    this.renderMoveList();
    this.commentEl = movesSection.createDiv({ cls: "cv-comment" });
  }
  setCounterEl(el) {
    this.counterEl = el;
    this.updateCounter();
  }
  setPlayBtnEl(el) {
    this.playBtnEl = el;
  }
  setNavButtons(first, prev, next, last) {
    this.firstBtnEl = first;
    this.prevBtnEl = prev;
    this.nextBtnEl = next;
    this.lastBtnEl = last;
    this.updateNavButtons();
  }
  get moveCount() {
    return this.moveTree.length;
  }
  get currentMoveIndex() {
    return this.currentIndex;
  }
  get currentMoves() {
    return this.currentLine;
  }
  get inVariation() {
    return this.lineStack.length > 0;
  }
  get isAtStart() {
    return this.currentIndex === 0 && !this.inVariation;
  }
  get isAtEnd() {
    return this.currentIndex >= this.currentLine.length;
  }
  get canGoBack() {
    if (this.inVariation)
      return true;
    return this.currentIndex > 0;
  }
  get canGoForward() {
    return this.currentIndex < this.currentLine.length;
  }
  // =====================================================================
  // NAVIGATION
  // =====================================================================
  goToMove(index) {
    if (this.destroyed)
      return;
    index = Math.max(0, Math.min(this.currentLine.length, index));
    this.replayToPosition(this.currentLine, index);
    this.currentIndex = index;
    const last = index > 0 ? this.currentLine[index - 1] : null;
    const lastMoveData = last ? { san: last.san, from: last.from, to: last.to, fen: last.fen } : null;
    const isEditable = this.data.isEditable && !this.data.isStatic;
    this.board.syncBoard(this.chess, lastMoveData, {
      movable: isEditable ? {
        free: false,
        color: "both",
        dests: getValidMoves(this.chess),
        showDests: true,
        events: {
          after: (orig, dest) => {
            void this.handleUserMove(orig, dest);
          }
        }
      } : { free: false, color: void 0 },
      moves: this.currentLine.map(nodeToMoveData),
      currentMoveIndex: this.currentIndex
    });
    this.renderMoveList();
    this.updateCounter();
    this.updateComment();
    this.updateNavButtons();
    this.board.updateNagOverlay(
      this.currentLine.map(nodeToMoveData),
      this.currentIndex
    );
    this.board.updateNagHighlight(
      this.currentLine.map(nodeToMoveData),
      this.currentIndex
    );
  }
  goToVariation(parentLine, moveIndex, varIndex) {
    if (this.destroyed)
      return;
    const parentMove = parentLine[moveIndex];
    if (!parentMove || !parentMove.variations[varIndex])
      return;
    this.lineStack.push({
      line: this.currentLine,
      index: moveIndex + 1
    });
    this.currentLine = parentMove.variations[varIndex];
    this.currentIndex = 0;
    this.goToMove(0);
  }
  goToMoveInLine(line, index) {
    if (this.destroyed)
      return;
    if (line === this.currentLine) {
      this.goToMove(index);
      return;
    }
    const path = this.findLinePath(this.moveTree, line);
    if (!path)
      return;
    this.lineStack = [];
    this.currentLine = this.moveTree;
    for (const segment of path) {
      this.lineStack.push({
        line: this.currentLine,
        index: segment.parentMoveIndex + 1
      });
      this.currentLine = segment.line;
    }
    this.goToMove(index);
  }
  findLinePath(searchIn, target) {
    if (searchIn === target)
      return [];
    for (let i = 0; i < searchIn.length; i++) {
      const move3 = searchIn[i];
      for (let v = 0; v < move3.variations.length; v++) {
        const varLine = move3.variations[v];
        if (varLine === target) {
          return [{ parentMoveIndex: i, line: varLine }];
        }
        const subPath = this.findLinePath(varLine, target);
        if (subPath) {
          return [{ parentMoveIndex: i, line: varLine }, ...subPath];
        }
      }
    }
    return null;
  }
  goToStart() {
    if (this.destroyed)
      return;
    if (!this.inVariation) {
      if (this.currentIndex === 0)
        return;
      this.goToMove(0);
      return;
    }
    if (this.currentIndex <= 1) {
      const parent = this.lineStack.pop();
      this.currentLine = parent.line;
      if (this.lineStack.length === 0) {
        this.goToMove(0);
      } else {
        this.goToMove(1);
      }
    } else {
      this.goToMove(1);
    }
  }
  goToEnd() {
    this.goToMove(this.currentLine.length);
  }
  goForward() {
    if (this.canGoForward) {
      this.goToMove(this.currentIndex + 1);
    }
  }
  goBack() {
    if (this.destroyed)
      return;
    if (this.inVariation && this.currentIndex <= 1) {
      const parent = this.lineStack.pop();
      this.currentLine = parent.line;
      this.goToMove(parent.index - 1);
    } else if (this.currentIndex > 0) {
      this.goToMove(this.currentIndex - 1);
    }
  }
  goToStartMove() {
    if (this.data.startMove <= 0)
      return;
    const target = this.data.startMove;
    let startFullMove = 1;
    let startIsBlack = false;
    if (this.data.fen) {
      const parts = this.data.fen.split(/\s+/);
      startFullMove = parseInt(parts[5] ?? "1") || 1;
      startIsBlack = parts[1] === "b";
    }
    let plyIndex;
    if (target < startFullMove) {
      plyIndex = 0;
    } else if (startIsBlack) {
      if (target === startFullMove) {
        plyIndex = 1;
      } else {
        plyIndex = 1 + (target - startFullMove) * 2;
      }
    } else {
      plyIndex = (target - startFullMove + 1) * 2;
    }
    this.goToMove(Math.min(plyIndex, this.currentLine.length));
  }
  // =====================================================================
  // USER MOVES
  // =====================================================================
  async handleUserMove(orig, dest) {
    if (this.destroyed)
      return;
    const promotion = await this.board.getPromotion(this.chess, orig, dest);
    try {
      const move3 = this.chess.move({ from: orig, to: dest, promotion });
      if (!move3)
        return;
      if (this.currentIndex < this.currentLine.length && this.currentLine[this.currentIndex].san === move3.san) {
        this.currentIndex++;
        this.board.syncAfterMove(
          this.chess,
          move3,
          this.currentLine.map(nodeToMoveData),
          this.currentIndex
        );
        this.renderMoveList();
        this.updateCounter();
        this.updateComment();
        this.updateNavButtons();
        this.board.updateNagOverlay(
          this.currentLine.map(nodeToMoveData),
          this.currentIndex
        );
        this.board.updateNagHighlight(
          this.currentLine.map(nodeToMoveData),
          this.currentIndex
        );
        return;
      }
      if (this.currentIndex < this.currentLine.length) {
        const currentMove = this.currentLine[this.currentIndex];
        for (let v = 0; v < currentMove.variations.length; v++) {
          if (currentMove.variations[v].length > 0 && currentMove.variations[v][0].san === move3.san) {
            this.chess.undo();
            this.goToVariation(this.currentLine, this.currentIndex, v);
            this.goToMove(1);
            return;
          }
        }
      }
      const newNode = {
        san: move3.san,
        from: move3.from,
        to: move3.to,
        fen: this.chess.fen(),
        variations: []
      };
      if (this.currentIndex < this.currentLine.length) {
        this.currentLine[this.currentIndex].variations.push([newNode]);
        this.chess.undo();
        this.goToVariation(
          this.currentLine,
          this.currentIndex,
          this.currentLine[this.currentIndex].variations.length - 1
        );
        this.goToMove(1);
      } else {
        this.currentLine.push(newNode);
        this.currentIndex = this.currentLine.length;
        this.board.syncAfterMove(
          this.chess,
          move3,
          this.currentLine.map(nodeToMoveData),
          this.currentIndex
        );
        this.renderMoveList();
        this.updateCounter();
        this.updateComment();
        this.updateNavButtons();
      }
    } catch {
      this.board.syncBoard(this.chess, null);
    }
  }
  // =====================================================================
  // AUTOPLAY
  // =====================================================================
  toggleAutoPlay() {
    if (this.isPlaying) {
      this.stopAutoPlay();
    } else {
      this.startAutoPlay();
    }
  }
  startAutoPlay() {
    if (this.isPlaying)
      return;
    this.isPlaying = true;
    if (this.playBtnEl) {
      this.playBtnEl.textContent = UI_LABELS.pause;
      this.playBtnEl.setAttribute("title", UI_LABELS.pauseTooltip);
    }
    this.playInterval = setInterval(() => {
      if (this.currentIndex >= this.currentLine.length) {
        this.stopAutoPlay();
        return;
      }
      this.goToMove(this.currentIndex + 1);
    }, this.settings.autoPlaySpeed);
  }
  stopAutoPlay() {
    this.isPlaying = false;
    if (this.playBtnEl) {
      this.playBtnEl.textContent = UI_LABELS.play;
      this.playBtnEl.setAttribute("title", UI_LABELS.playTooltip);
    }
    if (this.playInterval) {
      clearInterval(this.playInterval);
      this.playInterval = null;
    }
  }
  // =====================================================================
  // MOVE LIST RENDERING
  // =====================================================================
  renderMoveList() {
    if (!this.moveListEl)
      return;
    this.moveListEl.empty();
    const container = this.moveListEl.createDiv({ cls: "cv-moves-tree" });
    let baseMoveNum = 1;
    let baseIsBlack = false;
    if (this.data.fen) {
      const parts = this.data.fen.split(/\s+/);
      baseMoveNum = parseInt(parts[5] ?? "1") || 1;
      baseIsBlack = parts[1] === "b";
    }
    this.renderLine(container, this.moveTree, 0, baseMoveNum, baseIsBlack);
  }
  renderLine(container, line, depth, startMoveNum, startsOnBlack) {
    let moveNum = startMoveNum;
    let isBlack = startsOnBlack;
    let i = 0;
    if (isBlack && line.length > 0) {
      const row = container.createDiv({
        cls: depth === 0 ? "cv-moves-row" : "cv-moves-row cv-variation-row"
      });
      row.createSpan({ cls: "cv-move-num", text: `${moveNum}.` });
      row.createSpan({ cls: "cv-move-placeholder", text: UI_LABELS.movePlaceholder });
      this.createMoveSpan(row, line[0], line, 0, depth);
      this.renderVariationsForMove(container, line[0], depth, moveNum, true);
      i = 1;
      moveNum++;
      isBlack = false;
    }
    while (i < line.length) {
      const row = container.createDiv({
        cls: depth === 0 ? "cv-moves-row" : "cv-moves-row cv-variation-row"
      });
      row.createSpan({ cls: "cv-move-num", text: `${moveNum}.` });
      this.createMoveSpan(row, line[i], line, i, depth);
      const whiteMove = line[i];
      i++;
      if (i < line.length) {
        this.createMoveSpan(row, line[i], line, i, depth);
        const blackMove = line[i];
        i++;
        this.renderVariationsForMove(container, whiteMove, depth, moveNum, false);
        this.renderVariationsForMove(container, blackMove, depth, moveNum, true);
      } else {
        row.createSpan({ cls: "cv-move-empty" });
        this.renderVariationsForMove(container, whiteMove, depth, moveNum, false);
      }
      moveNum++;
    }
  }
  renderVariationsForMove(container, move3, depth, moveNum, parentIsBlack) {
    if (move3.variations.length === 0)
      return;
    for (const variation of move3.variations) {
      if (variation.length === 0)
        continue;
      const varContainer = container.createDiv({ cls: "cv-variation" });
      if (depth >= 2) {
        varContainer.addClass("cv-variation-deep");
      }
      this.renderLine(varContainer, variation, depth + 1, moveNum, parentIsBlack);
    }
  }
  createMoveSpan(container, move3, line, index, _depth) {
    const isActive = line === this.currentLine && index === this.currentIndex - 1;
    const classes = ["cv-move"];
    if (move3.comment)
      classes.push("has-comment");
    if (move3.annotations)
      classes.push("has-annotation");
    if (isActive)
      classes.push("active");
    const span = container.createSpan({
      cls: classes.join(" "),
      attr: move3.comment ? { title: move3.comment } : {}
    });
    span.createSpan({ text: this.formatMove(move3.san) });
    if (move3.nag) {
      const def = resolveNag(move3.nag);
      if (def) {
        span.createSpan({
          cls: `cv-move-nag ${def.cssClass}`,
          text: def.symbol
        });
      }
    }
    span.onclick = () => {
      this.goToMoveInLine(line, index + 1);
    };
    if (isActive) {
      setTimeout(() => {
        span.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }, 0);
    }
  }
  formatMove(san) {
    if (this.settings.notationType === "figurine") {
      return san.replace(/[KQRBN]/g, (m) => FIGURINE_NOTATION[m] ?? m);
    }
    return san;
  }
  // =====================================================================
  // UI UPDATES
  // =====================================================================
  updateCounter() {
    if (this.counterEl) {
      const prefix = this.inVariation ? "\u2442 " : "";
      this.counterEl.textContent = `${prefix}${this.currentIndex}/${this.currentLine.length}`;
    }
  }
  updateComment() {
    if (!this.commentEl)
      return;
    this.commentEl.empty();
    if (this.currentIndex <= 0)
      return;
    const move3 = this.currentLine[this.currentIndex - 1];
    if (!move3)
      return;
    const hasNag = !!move3.nag;
    const hasComment = !!move3.comment;
    if (!hasNag && !hasComment)
      return;
    if (hasNag && move3.nag) {
      const def = resolveNag(move3.nag);
      if (def) {
        this.commentEl.createSpan({
          cls: `cv-comment-nag ${def.cssClass}`,
          text: `${def.symbol} ${def.label}`
        });
      }
    }
    if (hasComment && move3.comment) {
      this.commentEl.createSpan({
        cls: "cv-comment-text",
        text: move3.comment
      });
    }
  }
  updateNavButtons() {
    if (this.firstBtnEl) {
      if (this.isAtStart) {
        this.firstBtnEl.setAttribute("disabled", "");
        this.firstBtnEl.addClass("cv-btn-disabled");
      } else {
        this.firstBtnEl.removeAttribute("disabled");
        this.firstBtnEl.removeClass("cv-btn-disabled");
      }
    }
    if (this.prevBtnEl) {
      if (!this.canGoBack) {
        this.prevBtnEl.setAttribute("disabled", "");
        this.prevBtnEl.addClass("cv-btn-disabled");
      } else {
        this.prevBtnEl.removeAttribute("disabled");
        this.prevBtnEl.removeClass("cv-btn-disabled");
      }
    }
    if (this.nextBtnEl) {
      if (!this.canGoForward) {
        this.nextBtnEl.setAttribute("disabled", "");
        this.nextBtnEl.addClass("cv-btn-disabled");
      } else {
        this.nextBtnEl.removeAttribute("disabled");
        this.nextBtnEl.removeClass("cv-btn-disabled");
      }
    }
    if (this.lastBtnEl) {
      if (this.isAtEnd) {
        this.lastBtnEl.setAttribute("disabled", "");
        this.lastBtnEl.addClass("cv-btn-disabled");
      } else {
        this.lastBtnEl.removeAttribute("disabled");
        this.lastBtnEl.removeClass("cv-btn-disabled");
      }
    }
  }
  // =====================================================================
  // REPLAY
  // =====================================================================
  replayToPosition(line, index) {
    this.chess.load(this.startFen);
    for (const frame of this.lineStack) {
      for (let i = 0; i < frame.index - 1; i++) {
        if (i < frame.line.length) {
          try {
            this.chess.move(frame.line[i].san);
          } catch {
            return;
          }
        }
      }
    }
    for (let i = 0; i < index; i++) {
      if (i < line.length) {
        try {
          this.chess.move(line[i].san);
        } catch {
          return;
        }
      }
    }
  }
  // =====================================================================
  // CLIPBOARD
  // =====================================================================
  getClipboardText() {
    if (this.moveTree.length === 0) {
      return this.chess.fen();
    }
    const headerEntries = { ...this.data.headers };
    if (this.data.fen && !headerEntries["FEN"]) {
      headerEntries["SetUp"] = "1";
      headerEntries["FEN"] = this.data.fen;
    }
    const headers = Object.entries(headerEntries).map(([k, v]) => `[${k} "${v}"]`).join("\n");
    let startMoveNum = 1;
    let startIsBlack = false;
    if (this.data.fen) {
      const parts = this.data.fen.split(/\s+/);
      startMoveNum = parseInt(parts[5] ?? "1") || 1;
      startIsBlack = parts[1] === "b";
    }
    const movesText = this.serializeLine(this.moveTree, startMoveNum, startIsBlack);
    return headers ? `${headers}

${movesText}` : movesText;
  }
  serializeLine(line, startMoveNum, startsOnBlack) {
    const parts = [];
    let moveNum = startMoveNum;
    let isBlack = startsOnBlack;
    for (let i = 0; i < line.length; i++) {
      const move3 = line[i];
      if (!isBlack) {
        parts.push(`${moveNum}.`);
      } else if (i === 0) {
        parts.push(`${moveNum}...`);
      }
      parts.push(move3.san);
      if (move3.nag) {
        const def = NAG_BY_CODE[move3.nag];
        if (def) {
          parts.push(def.inlinePgn ?? def.code);
        }
      }
      if (move3.comment && move3.comment !== "wrong") {
        parts.push(`{${move3.comment}}`);
      }
      for (const variation of move3.variations) {
        const varText = this.serializeLine(
          variation,
          moveNum,
          !isBlack
        );
        parts.push(`(${varText})`);
      }
      if (isBlack)
        moveNum++;
      isBlack = !isBlack;
    }
    return parts.join(" ");
  }
  // =====================================================================
  // CLEANUP
  // =====================================================================
  destroy() {
    this.destroyed = true;
    this.stopAutoPlay();
    this.moveListEl = null;
    this.commentEl = null;
    this.counterEl = null;
    this.playBtnEl = null;
    this.firstBtnEl = null;
    this.prevBtnEl = null;
    this.nextBtnEl = null;
    this.lastBtnEl = null;
  }
};
function nodeToMoveData(node) {
  return {
    san: node.san,
    from: node.from,
    to: node.to,
    fen: node.fen,
    comment: node.comment,
    nag: node.nag,
    annotations: node.annotations
  };
}

// src/chess-renderer.ts
var ChessRenderer = class {
  constructor(container, data, settings) {
    this.isFlipped = false;
    this.board = null;
    this.puzzle = null;
    this.nav = null;
    this.menuEl = null;
    this._keyHandler = null;
    this._menuCloseHandler = null;
    this.destroyed = false;
    this.container = container;
    this.data = data;
    this.settings = settings;
    this.chess = new Chess();
    if (data.orientation === "black") {
      this.isFlipped = true;
    } else if (data.orientation === "white") {
      this.isFlipped = false;
    } else if (settings.defaultOrientation === "black") {
      this.isFlipped = true;
    }
    if (data.fen) {
      try {
        this.chess.load(data.fen);
      } catch {
        if (!data.error) {
          data.error = "Failed to load position";
        }
      }
    }
    if (settings.defaultOrientation === "auto" && !data.isPuzzle && data.orientation === "white") {
      this.isFlipped = this.chess.turn() === "b";
    }
    if (data.isPuzzle && data.orientation === data.playerColor) {
      this.isFlipped = data.playerColor === "black";
    }
    this.startFen = this.chess.fen();
  }
  render() {
    this.destroy();
    this.destroyed = false;
    this.container.empty();
    this.container.addClass("chessview");
    if (this.data.error) {
      this.renderError(this.data.error);
      return;
    }
    this.chess = new Chess();
    if (this.data.fen) {
      try {
        this.chess.load(this.data.fen);
      } catch {
      }
    }
    const mainContainer = this.container.createDiv({ cls: "cv-container" });
    this.board = new BoardManager(
      this.container,
      this.settings,
      this.data,
      this.isFlipped
    );
    if (this.data.isPuzzle) {
      this.renderPuzzle(mainContainer);
    } else {
      this.renderGame(mainContainer);
    }
    this.setupKeyboardShortcuts();
  }
  renderGame(mainContainer) {
    this.renderHeader(mainContainer);
    const useRightLayout = this.shouldUseRightLayout();
    const content = mainContainer.createDiv({ cls: "cv-content" });
    if (!useRightLayout) {
      content.addClass("cv-content-vertical");
    }
    const boardColumn = content.createDiv({ cls: "cv-board-column" });
    const boardSection = boardColumn.createDiv({ cls: "cv-board-section" });
    this.board.createBoard(boardSection);
    this.nav = new NavigationController(
      this.chess,
      this.data,
      this.settings,
      this.board,
      this.startFen
    );
    const userMoveHandler = (orig, dest) => {
      void this.nav.handleUserMove(orig, dest);
    };
    this.board.initChessground(this.chess, userMoveHandler);
    if (useRightLayout && this.settings.showMoveList) {
      const movesSection = content.createDiv({ cls: "cv-moves-section" });
      this.nav.createMoveList(movesSection);
    }
    if (useRightLayout) {
      this.renderFooter(mainContainer);
    } else {
      this.renderFooter(boardColumn);
      if (this.settings.showMoveList) {
        const bottomMoves = boardColumn.createDiv({ cls: "cv-bottom-moves" });
        this.nav.createMoveList(bottomMoves);
      }
    }
    this.board.applyTheme();
    this.board.applyPieceSet();
    if (this.data.startMove > 0) {
      this.nav.goToStartMove();
    }
  }
  renderPuzzle(mainContainer) {
    this.puzzle = new PuzzleController(
      this.chess,
      this.data,
      this.settings,
      this.board,
      this.startFen
    );
    this.renderPuzzleHeader(mainContainer);
    const useRightLayout = this.shouldUseRightLayout();
    const content = mainContainer.createDiv({ cls: "cv-content" });
    if (!useRightLayout) {
      content.addClass("cv-content-vertical");
    }
    const boardColumn = content.createDiv({ cls: "cv-board-column" });
    const boardSection = boardColumn.createDiv({ cls: "cv-board-section" });
    this.board.createBoard(boardSection);
    this.board.initChessground(this.chess);
    if (useRightLayout) {
      const movesSection = content.createDiv({ cls: "cv-moves-section cv-moves-section-puzzle" });
      this.puzzle.createMoveList(movesSection);
      this.renderPuzzleFooter(mainContainer);
    } else {
      this.renderPuzzleFooter(boardColumn);
      const bottomMoves = boardColumn.createDiv({ cls: "cv-bottom-moves cv-bottom-moves-puzzle" });
      this.puzzle.createMoveList(bottomMoves);
    }
    this.board.applyTheme();
    this.board.applyPieceSet();
    this.puzzle.start();
  }
  shouldUseRightLayout() {
    if (!this.settings.showMoveList)
      return false;
    if (this.settings.moveListPosition === "bottom")
      return false;
    const screenWidth = window.innerWidth;
    if (screenWidth <= 600)
      return false;
    const boardWidth = this.getBoardPixelWidth();
    const needed = boardWidth + MOVE_LIST_PANEL_WIDTH;
    const leaf = this.container.closest(".workspace-leaf-content");
    const available = leaf ? leaf.clientWidth : screenWidth;
    return available >= needed;
  }
  getBoardPixelWidth() {
    switch (this.settings.boardSize) {
      case "small":
        return 280;
      case "medium":
        return 360;
      case "large":
        return 480;
      case "auto":
        return Math.min(480, this.container.parentElement?.clientWidth ?? 480);
      default:
        return 360;
    }
  }
  renderError(message) {
    const errorContainer = this.container.createDiv({ cls: "cv-error" });
    errorContainer.createEl("strong", { text: UI_LABELS.errorTitle });
    errorContainer.createEl("p", { text: message });
    const details = errorContainer.createEl("details");
    details.createEl("summary", { text: UI_LABELS.errorDetails });
    const pre = details.createEl("pre");
    pre.textContent = this.data.fen || this.data.pgn || UI_LABELS.errorNoInput;
  }
  renderHeader(container) {
    const header = container.createDiv({ cls: "cv-header" });
    const line1 = header.createDiv({ cls: "cv-header-line1" });
    const line2 = header.createDiv({ cls: "cv-header-line2" });
    const white = this.data.headers["White"];
    const black = this.data.headers["Black"];
    const whiteElo = this.data.headers["WhiteElo"];
    const blackElo = this.data.headers["BlackElo"];
    if (white || black) {
      const whiteName = white || "?";
      const blackName = black || "?";
      const whiteDisplay = whiteElo && whiteElo !== "?" ? `${whiteName} (${whiteElo})` : whiteName;
      const blackDisplay = blackElo && blackElo !== "?" ? `${blackName} (${blackElo})` : blackName;
      line1.createSpan({
        cls: "cv-header-players",
        text: `${whiteDisplay} vs ${blackDisplay}`
      });
    }
    const secondaryParts = [];
    const event = this.data.headers["Event"];
    if (event && event !== "?")
      secondaryParts.push(event);
    const date = this.data.headers["Date"];
    if (date && date !== "????.??.??") {
      const formatted = date.split(".").filter((p) => p !== "??").join("-");
      if (formatted)
        secondaryParts.push(formatted);
    }
    const result = this.data.headers["Result"];
    if (result && result !== "*")
      secondaryParts.push(result);
    if (secondaryParts.length > 0) {
      line2.createSpan({
        cls: "cv-header-secondary",
        text: secondaryParts.join(" \u2022 ")
      });
    }
    if (!white && !black) {
      line1.textContent = secondaryParts.length > 0 ? secondaryParts.join(" \u2022 ") : UI_LABELS.defaultHeader;
      line2.remove();
    }
    if (secondaryParts.length === 0 && line2.parentElement) {
      line2.remove();
    }
  }
  renderPuzzleHeader(container) {
    const header = container.createDiv({ cls: "cv-header" });
    const line1 = header.createDiv({ cls: "cv-header-line1" });
    line1.createSpan({ cls: "cv-header-label", text: UI_LABELS.puzzleLabel });
    const playerLabel = this.data.playerColor === "white" ? UI_LABELS.playerWhite : UI_LABELS.playerBlack;
    const statusSpan = line1.createSpan({
      cls: "cv-header-puzzle-status",
      text: UI_LABELS.puzzleHeaderPlaying(playerLabel)
    });
    this.puzzle.setHeaderStatusEl(statusSpan);
    const secondaryParts = [];
    if (this.data.puzzleTitle)
      secondaryParts.push(this.data.puzzleTitle);
    if (this.data.puzzleRating)
      secondaryParts.push(`${UI_LABELS.ratingPrefix}${this.data.puzzleRating}`);
    if (this.data.puzzleThemes.length > 0)
      secondaryParts.push(this.data.puzzleThemes.join(", "));
    const event = this.data.headers["Event"];
    if (event && event !== "?")
      secondaryParts.push(event);
    if (secondaryParts.length > 0) {
      const line2 = header.createDiv({ cls: "cv-header-line2" });
      line2.createSpan({
        cls: "cv-header-secondary",
        text: secondaryParts.join(" \u2022 ")
      });
    }
  }
  renderFooter(container) {
    const footer = container.createDiv({ cls: "cv-footer" });
    const leftGroup = footer.createDiv({ cls: "cv-footer-left" });
    if (this.nav) {
      const firstBtn = this.createControlBtn(
        leftGroup,
        UI_LABELS.firstMove,
        UI_LABELS.firstMoveTooltip,
        () => this.nav.goToStart()
      );
      const prevBtn = this.createControlBtn(
        leftGroup,
        UI_LABELS.previousMove,
        UI_LABELS.previousMoveTooltip,
        () => this.nav.goBack()
      );
      const playBtn = this.createControlBtn(
        leftGroup,
        UI_LABELS.play,
        UI_LABELS.playTooltip,
        () => this.nav.toggleAutoPlay()
      );
      playBtn.addClass("cv-play-btn");
      this.nav.setPlayBtnEl(playBtn);
      const nextBtn = this.createControlBtn(
        leftGroup,
        UI_LABELS.nextMove,
        UI_LABELS.nextMoveTooltip,
        () => this.nav.goForward()
      );
      const lastBtn = this.createControlBtn(
        leftGroup,
        UI_LABELS.lastMove,
        UI_LABELS.lastMoveTooltip,
        () => this.nav.goToEnd()
      );
      this.nav.setNavButtons(firstBtn, prevBtn, nextBtn, lastBtn);
      const counterEl = leftGroup.createSpan({ cls: "cv-counter" });
      this.nav.setCounterEl(counterEl);
    }
    const rightGroup = footer.createDiv({ cls: "cv-footer-right" });
    this.createControlBtn(rightGroup, UI_LABELS.flipBoard, UI_LABELS.flipTooltip, () => {
      this.isFlipped = !this.isFlipped;
      this.board?.flipBoard();
      if (this.nav) {
        this.board?.updateNagOverlay(
          this.nav.currentMoves.map((n) => ({
            san: n.san,
            from: n.from,
            to: n.to,
            fen: n.fen,
            comment: n.comment,
            nag: n.nag,
            annotations: n.annotations
          })),
          this.nav.currentMoveIndex
        );
      }
    });
    this.createMenuButton(rightGroup);
  }
  renderPuzzleFooter(container) {
    const footer = container.createDiv({ cls: "cv-footer" });
    const leftGroup = footer.createDiv({ cls: "cv-footer-left" });
    this.createControlBtn(
      leftGroup,
      UI_LABELS.firstMove,
      UI_LABELS.firstMoveTooltip,
      () => this.puzzle.goToStart()
    );
    this.createControlBtn(
      leftGroup,
      UI_LABELS.previousMove,
      UI_LABELS.previousMoveTooltip,
      () => this.puzzle.goBack()
    );
    this.createControlBtn(
      leftGroup,
      UI_LABELS.nextMove,
      UI_LABELS.nextMoveTooltip,
      () => this.puzzle.goForward()
    );
    this.createControlBtn(
      leftGroup,
      UI_LABELS.lastMove,
      UI_LABELS.lastMoveTooltip,
      () => this.puzzle.goToEnd()
    );
    const rightGroup = footer.createDiv({ cls: "cv-footer-right" });
    this.puzzle.createFooterButtons(rightGroup);
    this.createControlBtn(rightGroup, UI_LABELS.flipBoard, UI_LABELS.flipTooltip, () => {
      this.isFlipped = !this.isFlipped;
      this.board?.flipBoard();
    });
    this.createMenuButton(rightGroup);
  }
  createMenuButton(container) {
    const wrapper = container.createDiv({ cls: "cv-menu-wrapper" });
    const menuBtn = this.createControlBtn(
      wrapper,
      "\u2630",
      UI_LABELS.menuTooltip,
      () => this.toggleMenu()
    );
    menuBtn.addClass("cv-menu-btn");
    const dropdown = wrapper.createDiv({ cls: "cv-menu-dropdown" });
    this.menuEl = dropdown;
    const copyPgnItem = dropdown.createDiv({ cls: "cv-menu-item" });
    copyPgnItem.textContent = UI_LABELS.menuCopyPgn;
    copyPgnItem.onclick = () => {
      this.closeMenu();
      void this.copyPgnToClipboard();
    };
    const copyFenItem = dropdown.createDiv({ cls: "cv-menu-item" });
    copyFenItem.textContent = UI_LABELS.menuCopyFen;
    copyFenItem.onclick = () => {
      this.closeMenu();
      void this.copyFenToClipboard();
    };
    if (this.settings.showAnalysisLinks) {
      const urls = generateAnalysisUrls(this.data);
      const lichessItem = dropdown.createEl("a", {
        cls: "cv-menu-item",
        text: UI_LABELS.menuLichess,
        href: urls.lichess,
        attr: { target: "_blank", rel: "noopener" }
      });
      lichessItem.onclick = () => this.closeMenu();
      const chessComItem = dropdown.createEl("a", {
        cls: "cv-menu-item",
        text: UI_LABELS.menuChessCom,
        href: urls.chessCom,
        attr: { target: "_blank", rel: "noopener" }
      });
      chessComItem.onclick = () => this.closeMenu();
    }
    this._menuCloseHandler = (e) => {
      if (!wrapper.contains(e.target)) {
        this.closeMenu();
      }
    };
    document.addEventListener("click", this._menuCloseHandler);
  }
  toggleMenu() {
    if (this.menuEl) {
      this.menuEl.toggleClass("visible", !this.menuEl.hasClass("visible"));
    }
  }
  closeMenu() {
    if (this.menuEl) {
      this.menuEl.removeClass("visible");
    }
  }
  createControlBtn(container, icon, label, onClick) {
    const btn = container.createEl("button", {
      cls: "cv-btn",
      attr: { "aria-label": label, title: label }
    });
    btn.textContent = icon;
    btn.onclick = (e) => {
      e.stopPropagation();
      onClick();
    };
    btn.addEventListener("touchstart", (e) => {
      e.stopPropagation();
    });
    btn.addEventListener("touchend", (e) => {
      e.stopPropagation();
    });
    return btn;
  }
  async copyPgnToClipboard() {
    let text;
    if (this.data.isPuzzle) {
      const movesText = this.data.solutionMoves.map((m, i) => {
        const str = i % 2 === 0 ? `${Math.floor(i / 2) + 1}. ${m.san}` : m.san;
        return str;
      }).join(" ");
      const headers = Object.entries(this.data.headers).map(([k, v]) => `[${k} "${v}"]`).join("\n");
      text = headers ? `${headers}

${movesText}` : movesText;
    } else if (this.nav) {
      text = this.nav.getClipboardText();
    } else {
      text = this.chess.fen();
    }
    await this.writeClipboard(text);
  }
  async copyFenToClipboard() {
    await this.writeClipboard(this.chess.fen());
  }
  async writeClipboard(text) {
    const btn = this.container.querySelector(".cv-menu-btn");
    try {
      await navigator.clipboard.writeText(text);
      if (btn) {
        btn.addClass("copied");
        setTimeout(() => btn.removeClass("copied"), COPY_FEEDBACK_DURATION);
      }
    } catch {
      if (btn) {
        btn.addClass("copy-failed");
        setTimeout(() => btn.removeClass("copy-failed"), COPY_FAILURE_DURATION);
      }
    }
  }
  setupKeyboardShortcuts() {
    this.container.setAttribute("tabindex", "0");
    const handler = (e) => {
      if (this.destroyed)
        return;
      if (this.data.isPuzzle) {
        switch (e.key) {
          case "ArrowLeft":
            e.preventDefault();
            this.puzzle?.goBack();
            break;
          case "ArrowRight":
            e.preventDefault();
            this.puzzle?.goForward();
            break;
          case "Home":
            e.preventDefault();
            this.puzzle?.goToStart();
            break;
          case "End":
            e.preventDefault();
            this.puzzle?.goToEnd();
            break;
          case "f":
          case "F":
            e.preventDefault();
            this.isFlipped = !this.isFlipped;
            this.board?.flipBoard();
            break;
        }
        return;
      }
      if (!this.nav)
        return;
      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          this.nav.goBack();
          break;
        case "ArrowRight":
          e.preventDefault();
          this.nav.goForward();
          break;
        case "Home":
          e.preventDefault();
          this.nav.goToStart();
          break;
        case "End":
          e.preventDefault();
          this.nav.goToEnd();
          break;
        case " ":
          e.preventDefault();
          this.nav.toggleAutoPlay();
          break;
        case "f":
        case "F":
          e.preventDefault();
          this.isFlipped = !this.isFlipped;
          this.board?.flipBoard();
          break;
        case "Escape":
          this.closeMenu();
          break;
      }
    };
    this.container.addEventListener("keydown", handler);
    this._keyHandler = handler;
  }
  destroy() {
    this.destroyed = true;
    if (this._keyHandler) {
      this.container.removeEventListener("keydown", this._keyHandler);
      this._keyHandler = null;
    }
    if (this._menuCloseHandler) {
      document.removeEventListener("click", this._menuCloseHandler);
      this._menuCloseHandler = null;
    }
    this.nav?.destroy();
    this.puzzle?.destroy();
    this.board?.destroy();
    this.nav = null;
    this.puzzle = null;
    this.board = null;
    this.menuEl = null;
  }
};

// src/main.ts
var ChessRenderChild = class extends import_obsidian2.MarkdownRenderChild {
  constructor(containerEl, renderer) {
    super(containerEl);
    this.renderer = renderer;
  }
  onunload() {
    this.renderer.destroy();
  }
};
var ChessViewPlugin = class extends import_obsidian2.Plugin {
  async onload() {
    await this.loadSettings();
    this.registerMarkdownCodeBlockProcessor(
      "chessview",
      (source, el, ctx) => {
        this.processChessBlock(source, el, ctx);
      }
    );
    this.addSettingTab(new ChessViewSettingTab(this.app, this));
    this.addCommand({
      id: "insert-game",
      name: "Insert game",
      editorCallback: (editor) => {
        editor.replaceSelection(
          '```chessview\n[Event "?"]\n[White "?"]\n[Black "?"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bb5\n```'
        );
      }
    });
    this.addCommand({
      id: "insert-fen",
      name: "Insert position (FEN)",
      editorCallback: (editor) => {
        editor.replaceSelection(
          "```chessview\nrnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1\n```"
        );
      }
    });
    this.addCommand({
      id: "insert-puzzle",
      name: "Insert puzzle",
      editorCallback: (editor) => {
        editor.replaceSelection(`\`\`\`chessview
[puzzle]
[rating: 1500]
[title: White to move and win]
---
[FEN "r1bqkb1r/pppp1ppp/2n2n2/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR w KQkq - 4 3"]

1. Qxf7#
\`\`\``);
      }
    });
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  processChessBlock(source, el, ctx) {
    try {
      const container = el.createDiv({ cls: "chessview-container" });
      const data = parseChessInput(source);
      const renderer = new ChessRenderer(container, data, this.settings);
      renderer.render();
      ctx.addChild(new ChessRenderChild(container, renderer));
    } catch (error) {
      console.error("ChessView Error:", error);
      el.createDiv({
        cls: "chessview-error",
        text: `Error: ${error instanceof Error ? error.message : String(error)}`
      });
    }
  }
};

/* nosourcemap */