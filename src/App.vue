<template>
  <v-row class="ma-2">
    <v-col cols="6">
      <v-text-field v-model="search" label="Pesquisa" outlined />
    </v-col>
    <v-col cols="3">
      <v-text-field label="Categoria" outlined />
    </v-col>
    <v-col cols="3">
      <v-text-field label="Texto" outlined />
    </v-col>
  </v-row>

  <v-row class="ma-2">
    <v-col v-for="translation in translations" :key="translation.id" cols="12" md="6">
      <v-card>
        <template v-slot:title>
          {{ translation.id }}
        </template>

        <template v-slot:subtitle>
          {{
            translation.text.slice(0, 26) + '...'
          }}
        </template>

        <template v-slot:text>
          <v-row>
            <v-col>
              <p class="mb-3">
                {{ translation.text }}
              </p>
              <p>
                {{ translation.translatedText }}

              </p>
            </v-col>
          </v-row>
        </template>

        <div class="px-4 mb-2">
          <v-chip-group>
            <v-chip v-for="category in translation.categories" :key="category">Categoria 1</v-chip>
          </v-chip-group>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { getTranslations } from './helper';
const search = ref('');
const translations = computed(() => getTranslations([], search.value));
</script>
