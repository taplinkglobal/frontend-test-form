import { FontSizeOptions, FontStyle } from '~/components/form/options'

export const schema = [
  {
    $formkit: 'group',
    name: 'values',
    children: [
      {
        $formkit: 'text',
        for: ['item', 'key', '$values'],
        name: '$key',
        value: '$item',
        validation: 'required',
        validationVisibility: 'live',
      },
    ],
  }, {
    $formkit: 'group',
    name: 'params',
    children: [
      {
        $el: 'div',
        for: ['item', 'key', '$params'],
        children: [{
          if: '$key === "fontSizeOptions"',
          then: {
            $formkit: 'select',
            name: '$key',
            label: '$key',
            options: FontSizeOptions,
            value: '$item',
          },
          else: {
            if: '$key === "fontStyle"',
            then: {
              $formkit: 'select',
              name: '$key',
              label: '$key',
              options: FontStyle,
              value: '$item',
            },
            else: {
              $formkit: 'text',
              name: '$key',
              label: '$key',
              value: '$item',
            },
          },
        }],
      },
    ],
  },
]
