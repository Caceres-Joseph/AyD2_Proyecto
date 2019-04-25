<template>
<v-app id="inspire">
    <v-navigation-drawer
        app
        v-model="drawer"
        clipped
        fixed
        :mini-variant.sync="mini"
        mini>

        <v-toolbar 
            flat
            class="transparent">
            <v-list class="pa-0">
                <v-list-tile avatar>
                    <v-list-tile-avatar>
                        <img src="https://randomuser.me/api/portraits/men/85.jpg">
                    </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title>Jhosef Cáceres</v-list-tile-title>
                        </v-list-tile-content>

                        <v-list-tile-action>
                            <v-btn
                                icon
                                @click.stop="mini = !mini">
                                <v-icon>chevron_left</v-icon>
                            </v-btn>
                        </v-list-tile-action>
                </v-list-tile>
            </v-list>
        </v-toolbar>
        <v-list
            class="pt-0"
            dense>
            <v-divider></v-divider>

            <v-list-tile
                v-for="item in items"
                :key="item.title">
                <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
    <v-toolbar
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        color="blue darken-3"
        dark
        app
        fixed>
        <v-toolbar-title
            style="width: 300px"
            class="ml-0 pl-3">
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <span class="hidden-sm-and-down">New Games</span>
        </v-toolbar-title>
        <v-text-field
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="search"
            label="Buscar"
            class="hidden-sm-and-down"></v-text-field>
        <v-spacer></v-spacer>
        <v-btn icon>
            <v-icon>apps</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>notifications</v-icon>
        </v-btn>
        <v-btn
            icon
            large>
            <v-avatar
                size="32px"
                tile>
                <img
            src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
            alt="Vuetify"
          >
        </v-avatar>
        </v-btn>
    </v-toolbar>
    <v-content>
        <br>
        <cuerpo />
    </v-content>
    <v-footer class="pa-3 justify-center">
        <div>&copy; Seminario1 Primer Semestre {{ new Date().getFullYear() }} <strong>Jhosef Cáceres - 201513595</strong></div>
    </v-footer>

</v-app>
</template>

<script>
import cuerpo from './cuerpo/cuerpo.vue'
export default {
    components: {
        cuerpo
    },
    data: () => ({
        drawer: true,
        items: [{
                title: 'Inicio',
                icon: 'dashboard'
            },
            {
                title: 'Acerca de',
                icon: 'question_answer'
            }
        ],
        mini: true,
        right: null,
    }),
    props: {
        source: String
    }
}
</script>

<style>
.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .5;
    position: absolute;
    width: 100%;
}
</style>
