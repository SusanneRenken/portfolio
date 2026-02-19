import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  Output,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
})
export class OverlayComponent implements OnInit, OnChanges {
  @Input() ability: any;
  @Input() isOpen = false;
  @Output() overlayClosed = new EventEmitter<void>();

  public contentStyle = { transform: 'translateY(100vh)' };
  public isClosing = false;
  public internalShow = false;

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isOpen']) {
      if (changes['isOpen'].currentValue) {
        this.internalShow = true;
        this.isClosing = false;
        this.contentStyle.transform = 'translateY(100vh)';

        setTimeout(() => {
          this.contentStyle.transform = 'translateY(0)';
        }, 50);
      }
    }
  }

  toggleOverlay() {
    if (!this.isClosing) {
      this.isClosing = true;
      this.internalShow = false;
      this.contentStyle.transform = 'translateY(100vh)';
    }
  }

  onTransitionEnd(event: TransitionEvent) {
    if (event.propertyName === 'transform' && this.isClosing) {
      this.overlayClosed.emit();
    }
  }
}
