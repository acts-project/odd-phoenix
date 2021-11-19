import { Component, OnInit } from '@angular/core';
import {
  Configuration,
  PhoenixLoader,
  PhoenixMenuNode,
  PresetView,
  StateManager,
} from 'phoenix-event-display';
import { EventDisplayService } from 'phoenix-ui-components';
import { environment } from '../../../environments/environment';
import { getUrlOptions } from '../../functions/url-options';
import eventConfig from '../../../event-config.json';
import phoenixMenuConfig from '../../../assets/files/config/open-data-detector-config.json';

@Component({
  selector: 'open-data-detector-experiment',
  templateUrl: './open-data-detector.component.html',
  styleUrls: [],
})
export class OpenDataDetector implements OnInit {
  phoenixMenuRoot = new PhoenixMenuNode('Phoenix Menu', 'phoenix-menu');
  loaded = false;
  loadingProgress = 0;

  constructor(private eventDisplay: EventDisplayService) {}

  ngOnInit() {
    let defaultEvent: { eventFile: string; eventType: string };
    // FIXME - add event data.
    // if (environment?.singleEvent) {
    //   defaultEvent = eventConfig;
    // } else {
    //   defaultEvent = {
    //     eventFile: 'assets/files/jive-xml/JiveXML_336567_2327102923.xml',
    //     eventType: 'jivexml',
    //   };
    // }

    // Define the configuration
    const configuration: Configuration = {
      eventDataLoader: new PhoenixLoader(),
      presetViews: [
        new PresetView('Left View', [0, 0, -12000], 'left-cube'),
        new PresetView('Center View', [-500, 12000, 0], 'top-cube'),
        new PresetView('Right View', [0, 0, 12000], 'right-cube'),
      ],
      defaultView: [4000, 0, 4000],
      // Set the phoenix menu to be used (defined above)
      phoenixMenuRoot: this.phoenixMenuRoot,
      // Default event data to fallback to if none given in URL
      // Do not set if there should be no event loaded by default
      // defaultEventFile: defaultEvent,
    };

    // Initialize the event display
    this.eventDisplay.init(configuration);

    this.loadGeometry();

    this.eventDisplay
      .getLoadingManager()
      .addProgressListener((progress) => (this.loadingProgress = progress));

    this.eventDisplay.getLoadingManager().addLoadListenerWithCheck(() => {
      this.loaded = true;

      const urlConfig = this.eventDisplay
        .getURLOptionsManager()
        .getURLOptions()
        .get('config');

      if (!urlConfig) {
        const stateManager = new StateManager();
        stateManager.loadStateFromJSON(phoenixMenuConfig);
        this.eventDisplay.animateClippingWithCollision(10000);
      }
    });
  }

  private loadGeometry() {
    // Magnets + Support
    this.eventDisplay.loadGLTFGeometry(
      'assets/geometry/long_strips.gltf',
      'Long Strips',
      'Inner',
      1000,
      true
    );
    this.eventDisplay.loadGLTFGeometry(
      'assets/geometry/pixels.gltf',
      'Pixels',
      'Inner',
      1000,
      false
    );
    this.eventDisplay.loadGLTFGeometry(
      'assets/geometry/short_strips.gltf',
      'Short Strips',
      'Inner',
      1000,
      false
    );
  }

}
