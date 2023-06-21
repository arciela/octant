import { Component, OnInit, Renderer2 } from '@angular/core'
import { ThemeService } from '../../../modules/shared/services/theme/theme.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  constructor(private renderer: Renderer2, private themeService: ThemeService) {
  }

  ngOnInit() {
    this.themeService.loadTheme()
  }
}
