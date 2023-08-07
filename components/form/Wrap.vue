<script setup lang="ts">
// eslint-disable-next-line unused-imports/no-unused-imports
import { FormKitSchema } from '@formkit/vue'

// eslint-disable-next-line unused-imports/no-unused-imports
import { schema } from '~/components/form/shema'

const formData = ref({
  values: {
    header: 'Заголовок 1',
    desc: 'Описание 1',
  },
  params: {
    fontSizeOptions: 'xl',
  },
})

const dataForm1 = {
  values: {
    header: 'Заголовок 1',
    desc: 'Описание 1',
  },
  params: {
    fontSizeOptions: 'xl',
  },
}

const dataForm2 = {
  values: {
    header: 'Заголовок 2',
    desc: 'Описание 2',
  },
}

const dataForm3 = {
  values: {
    header: 'Заголовок 3',
    desc: 'Описание 3',
  },
  params: {
    fontStyle: 'italic',
    display: 'big',
  },
}

// TODO: Типизировать
function setActiveSet(data: any) {
  console.log('setActiveSet', data)
  formData.value = data
}
</script>

<template lang="pug">
.p-4
  //- TODO: Нужно выводить активные данные из формы
  pre Данные из формы

.p-4
  //- TODO: Реализовать смену данных форме
  .text-sm Данные должны обновлять форму
  .flex.gap-3
    div(@click="setActiveSet(dataForm1)") setActive 1
    div(@click="setActiveSet(dataForm2)") setActive 2
    div(@click="setActiveSet(dataForm3)") setActive 3

.p-4
  FormKit(
    type="form"
  )
    FormKitSchema(
      :schema="schema"
      :data="formData"
    )
</template>
