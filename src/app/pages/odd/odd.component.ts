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
import phoenixMenuConfigR3 from '../../../assets/files/config/phoenix-config.json';
import phoenixMenuConfigR4 from '../../../assets/files/config/run4.json';

@Component({
  selector: 'odd-experiment',
  templateUrl: './odd.component.html',
  styleUrls: [],
})
export class ODDComponent implements OnInit {
  apiURL = '../api/read-files.php';
  phoenixMenuRoot = new PhoenixMenuNode('Phoenix Menu', 'phoenix-menu');
  loaded = false;
  loadingProgress = 0;

  constructor(private eventDisplay: EventDisplayService) {}

  ngOnInit() {

    const urlOptions = getUrlOptions();


    // Define the configuration
    const configuration: Configuration = {
      eventDataLoader: new PhoenixLoader(),
      presetViews: [
        new PresetView('Left View', [0, 0, -12000], [0, 0, 0], 'left-cube'),
        new PresetView('Center View', [-500, 12000, 0], [0, 0, 0], 'top-cube'),
        new PresetView('Right View', [0, 0, 12000], [0, 0, 0], 'right-cube'),
      ],
      defaultView: [4000, 0, 4000],
      // Set the phoenix menu to be used (defined above)
      phoenixMenuRoot: this.phoenixMenuRoot,
      // Default event data to fallback to if none given in URL
      // Do not set if there should be no event loaded by defaultF
      // defaultEventFile: defaultEvent,
    };

    const theme = urlOptions.get('theme');
    if (theme){
      const choices = ['dark', 'light'];
      if (choices.includes(theme.toLocaleLowerCase())) {
        configuration.forceColourTheme=theme; 
      } else {
        console.log('Unknown theme ', theme)
      }
    }


    // Initialize the event display
    this.eventDisplay.init(configuration);

    this.eventDisplay.loadGLTFGeometry(
      'assets/geometry/ODD.gltf',
      'ODD',
      'Everything',
      10,
      true
    );



    this.eventDisplay
      .getLoadingManager()
      .addProgressListener((progress) => (this.loadingProgress = progress));

    this.eventDisplay.getLoadingManager().addLoadListenerWithCheck(() => {
      this.loaded = true;
    });
  }

}
