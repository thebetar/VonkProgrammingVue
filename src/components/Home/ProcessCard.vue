<template>
  <v-card
    class="pa-4 d-flex flex-column align-center my-auto text-center"
    elevation="6"
    outlined
    title="Procesbeschrijving"
  >
    <v-img
      src="@/assets/svg/process.svg"
      class="p-4"
      width="120"
      height="120"
    />
    <v-card-text>
      <v-list role="list">
        <v-list-item role="listitem">
          <v-list-item-title>Kennismaking: </v-list-item-title>
          <v-list-item-subtitle class="card-subtitle">
            Voorafgaand vindt er een kennsmakingsgesprek plaats waarin de
            context van uw wens wordt besproken.
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item role="listitem">
          <v-list-item-title>Ontwerp: </v-list-item-title>
          <v-list-item-subtitle class="card-subtitle">
            Op basis van de besproken details wordt er een product ontwerp
            gemaakt. Door middel van schetsen van schermontwerpen. Gedurende dit
            proces is het belangrijk dat de klant tevreden is met het ontwerp en
            dat de voorgestelde uitwerking het gestelde probleem zal oplossen.
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item role="listitem">
          <v-list-item-title>Realisatie: </v-list-item-title>
          <v-list-item-subtitle class="card-subtitle">
            Het eindproduct wordt gerealiseerd met meerdere feedback rondes
            waarbij wordt gekeken of het product de juiste kant op gaat.
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item role="listitem">
          <v-list-item-title>Afronding: </v-list-item-title>
          <v-list-item-subtitle class="card-subtitle">
            Zodra het eindproduct klaar is zorgt VonkProgramming ervoor dat
            enige bugs eruit gefilterd worden.
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.v-card {
  border: 2px #aaa solid;
  border-radius: 0.5rem;
}

.card-subtitle {
  color: #333;
  font-size: 0.9rem;
  opacity: 1;
}
</style>
