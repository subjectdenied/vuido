import { Widget } from './widget'
import Gtk from '../../gtk';

export class TextView extends Widget {
  _getDefaultAttributes() {
    return {
    }
  }

  _createWidget() {
    this.widget = new Gtk.TextView()
    this.widget.show()
  }

  _appendWidget( childNode ) {
    if (super._appendWidget(childNode)) return
    this.widget.add(childNode.widget);
  }

  _removeWidget( childNode ) {
    this.widget.remove(childNode.widget);
  }

  _initializeWidgetAttributes() {
    super._initializeWidgetAttributes();
  }

  _setWidgetAttribute( key, value ) {
    if (this.widget === null) return
    if (typeof this.widget[key] !== 'undefined') {
      this.widget[key] = value
    } else {
      super._setWidgetAttribute(key, value)
    }
  }
}
