import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { StorageMap } from '@ngx-pwa/local-storage';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private update: SwUpdate) {
    this.updateVersionServiceWorker();
  }

  public updateVersionServiceWorker() {
    if(this.update.isEnabled) {
        this.update.available
        .pipe(takeUntil(this.destroy$))
        .subscribe(() =>
            this.update.activateUpdate().then(() => window.location.reload())
        );
    }
}

}