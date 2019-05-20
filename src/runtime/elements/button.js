import Gtk from '../gtk';

import { Widget } from './widget'

export class Button extends Widget {
  _getDefaultAttributes() {
    return {
      label: ''
    }
  }

  _createWidget() {
    this.widget = new Gtk.Button()
    this.widget.show()
    console.log('Button created')
  }

  _initializeWidgetAttributes() {
    super._initializeWidgetAttributes();

    this._setWidgetAttribute('label', this.attributes.label)

    this.widget.show()
  }

  _appendWidget( childNode ) {
    this.widget.add(childNode.widget);
  }

  _removeWidget( childNode ) {
    this.widget.remove(childNode);
  }

  _setWidgetAttribute( key, value ) {
    console.log(key, value)
    if (this.widget === null) return
    switch (key) {
      case 'label':
        console.log(this.widget)
        this.widget.setLabel(value)
        break
      default:
        super._setWidgetAttribute(key, value)
    }
  }

  _setWidgetHandler( event, handler ) {
    console.log('button._setWidgetHandler', event)
    switch (event) {
      case 'click':
        this.widget.connect('clicked', () =>
          setImmediate(handler)
        )
        break
      default:
        super._setWidgetHandler(event, handler)
    }
  }
}
