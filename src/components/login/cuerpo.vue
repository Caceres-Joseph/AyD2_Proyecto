<template>
<v-app id="inspire">
    <v-content>
        <v-parallax
            src="./lineas.png" 
            >
            <v-container
                fluid
                fill-height>
                <v-layout
                    align-center
                    justify-center>
                    <v-flex
                        xs12
                        sm8
                        md8>
                        <v-card class="elevation-21">
                            <v-toolbar
                                dark
                                color="light-blue darken-4">
                                <v-toolbar-title > <v-icon x-large>monetization_on</v-icon> <span class="headline">Banco de Guatemala</span></v-toolbar-title>
                                <v-spacer></v-spacer>
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field
                                        ref="txtTipoComprobante"
                                        v-model="item.correo"
                                        prepend-icon="person"
                                        name="login"
                                        label="Correo"
                                        autofocus
                                        type="text"></v-text-field>
                                    <v-text-field
                                        v-model="item.password"
                                        prepend-icon="lock"
                                        name="password"
                                        label="Contraseña"
                                        type="password"></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="light-blue darken-4"
                                    @click="validar"
                                    dark
                                    depressed
                                    large>Acceder
                                </v-btn>
                                <v-btn
                                    @click="clckRegistro"
                                    color="blue-grey lighten-4"
                                    depressed
                                    large>
                                    Registrarse
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-parallax>
    </v-content>
    <!-- Snackbar -->
    <v-snackbar
        :timeout=3000
        button
        v-model="snackStatus"
        :color="snackColor">
        {{ sanckText }}
        <!-- <v-btn    @click.native="snackStatus = false">Cerrar</v-btn> -->
        <div>
            <v-btn
                depressed
                small
                dark
                :color="snackColor"
                @click.native="snackStatus = false">Cerrar</v-btn>
        </div>
    </v-snackbar>
</v-app>
</template>

<script src ="./cuerpo.js">
