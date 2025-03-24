<template>
  <v-row class="ma-2">
    <v-col cols="6">
      <v-text-field label="Pesquisa" outlined />
    </v-col>
    <v-col cols="3">
      <v-text-field label="Categoria" outlined />
    </v-col>
    <v-col cols="3">
      <v-text-field label="Texto" outlined />
    </v-col>
  </v-row>

  <v-row class="ma-2">
    <v-col>
      <v-card>
        <template v-slot:title>
          This is a title
        </template>

        <template v-slot:subtitle>
          This is a card subtitle
        </template>

        <template v-slot:text>
          <v-row>
            <v-col>
              <p class="mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, facere! Corrupti saepe
                est, eveniet a eligendi, illum amet quam tempore pariatur temporibus atque nihil voluptatem, suscipit
                sunt sapiente! Ut, quisquam.</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, facere! Corrupti saepe est, eveniet a
                eligendi, illum amet quam tempore pariatur temporibus atque nihil voluptatem, suscipit sunt sapiente!
                Ut, quisquam.</p>
            </v-col>
          </v-row>
        </template>

        <div class="px-4 mb-2">
          <v-chip-group>
            <v-chip>Categoria 1</v-chip>

            <v-chip>Categoria 2</v-chip>

            <v-chip>Categoria 3</v-chip>

            <v-chip>Categoria 4</v-chip>
          </v-chip-group>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>
