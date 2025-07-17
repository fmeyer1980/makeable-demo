import Alpine from 'alpinejs'
import morph from '@alpinejs/morph'
import persist from '@alpinejs/persist'
// import * as Turbo from "@hotwired/turbo"
// import { ForesightManager } from "js.foresight"

// ForesightManager.initialize({
//   enableMousePrediction: true,
//   positionHistorySize: 8,
//   trajectoryPredictionTime: 80,
//   defaultHitSlop: 10,
//   resizeScrollThrottleDelay: 50,
//   debug: false,
//   debuggerSettings: {
//     isControlPanelDefaultMinimized: false,
//   },
//   enableTabPrediction: true,
//   tabOffset: 3,
// })

window.Alpine = Alpine
Alpine.plugin(morph)
Alpine.plugin(persist)

Alpine.start()
