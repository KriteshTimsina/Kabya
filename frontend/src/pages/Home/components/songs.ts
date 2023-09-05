type Lyrics = {
  NEP: string;
  ENG: string;
};
export interface ISong {
  id: number;
  hasLyrics: boolean;
  artist: string;
  track: string;
  image: string;
  lyrics?: Lyrics;
}
export const songs: ISong[] = [
  {
    id: 1,
    hasLyrics: true,
    artist: "Bipul Chettri",
    track: "Rail Garee",
    image:
      "https://upload.wikimedia.org/wikipedia/en/d/d0/Sketchesofdajeelingcover.jpg",
    lyrics: {
      NEP: `
                दार्जिलिङको रेलगाडी 'छुक-छुक' गर्दै अघि बढी
                बूढापाखा, यौवन, सबैलाई समेटी हिँडी
                बितिसके कति जीवन, आयो फर्की कति
                अघि बढेछौ है तिमी, रुक्ने न कहिले पनि
                संसार म छाडी आएँ, तिमी जस्तै हैन, अर्को है
                बतासे डाँडा काटेर आयो है फेरी फर्केर
                इन्जिन धुवाँ उडाई, 'कु-कु' गरी सिटी बजाइ
                संसारको भीडमा आज, भागेछु मो आज
                तिम्रो र मेरो माझ पुरानो यो बन्धन अझ
                लैजाऊ मलाई तिमीसँगै, जिउन यहाँ गाह्रो भयो है
                कु-कु...
                कु-कु...
                कु-कु...
                आ-हा-हा...
                दुई दिनको जिन्दगानी, मर्ने छौँ है सबै हामी
                जिउने छु म माया नमारी, आ-हा
                मनभरी माया बोकी, समझन्छु म घरीघरी
                गर्न अझ कति धेरै
                तर टाढा त जानु छ मलाई, संसार जित्नु छ मलाई
                नसक्ने केही नरैछन् है, हो-हो
                तिम्रो साथ भएदेखि, तिम्ले हात थामेदेखि
                संसार म जितिदिन्छु, आकाश म चुमिदिन्छु
                हरियाली-हरियाली, चारैतिर हरियाली
                जतातिरै हेर भरिएको चियाबारी
                उकाली र ओराली गर्दै आयो डाँडा काटी
                कहिलेकाहीँ तिमी सम्झी याद आउँछ बेस्सरी
                हिँडेछु त्यो पारी, चढेर म रेलगाडी
                कु-कु...
                कु-कु...
                (कु-कु...) रेलगाडी-रेलगाडी, चढेर है जानेछु म रेलगाडी-रेलगाडी
                (कु-कु...) रेलगाडी-रेलगाडी, चढेर है जानेछु म रेलगाडी-रेलगाडी
                (कु-कु...) रेलगाडी-रेलगाडी
                रेलगाडी, आ-हा-हा...
            `,
      ENG: `
            [Verse-1]
            Darjaleeng ko rail gadi,
            chukk chukk gardai aghi badi,
            budhapakha, youban
            sabailai sametti hidi
            bitisakeka kati jiwan
            aayo pharki kati
            Aghi badhchau hai timi
            rukne na kahilai pani
            sansaar ma chaddi aye
            timi jastai hainam arkai hai
            
            [Verse-2]
            batasey dadha katera,
            aayo hau feri pharkera
            engine dhuwa uddai
            ku ku gari siti bajai
            sansarko bhidma ajja bhagechu ma ajja
            timro ra mero majha purano yo bandhan aaja 
            laijau malai timisanga
            jiuna yaha garo bhayo hai
            ku ku
            ku ku
            ku ku
            aa ha ha
            
            dui dinko jindagani
            marnechau hai sabai hami
            juinechu ma maya namari
            aa ha
            manbhari maya boki
            samjhanchu ma ghari ghari
            garna ajha kati dherai
            
            tara tadha ta janu cha malai
            sansar jitnu cha malai
            nasakne kehi naraichan hai
            ho ho
            
            timro satha bhayedekhi
            timle haata thamedekhi
            sansar ma jitidinchu
            aakash m chumidinchu
            
            hariyali hariyali charaitira hariyali
            jatatira hera
            bhariyeko chiyabari
            ukali ra orali gardau aayo dadha kati
            kahilai kahi timi samjhi yaad auucha besari
            hidchu tyo pari chadera ma rail gadi
            
            rail gadi rail gadi chadera hai janehu ma
            rail gadi rail gadi
            rail gadi rail gadi chadera hai janehu ma
            rail gadi rail gadi
            rail gadi rail gadi
            aa ha ha
            `,
    },
  },
  {
    id: 2,
    hasLyrics: true,
    artist: "Pahenlo Batti Muni",
    track: "Gauthali",
    image:
      "data:image/jpeg;base64,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",
    lyrics: {
      NEP: `
            मसँगै उड न, गौँथली
            टाढा-नजिक जहाँ भए नि
            मसँगै उड न, गौँथली
            टाढा-नजिक जहाँ भए नि
            एकैछिन गर न चिरिबिरी
            के होला तिम्रो त्यो मनभरि?
            यो घर न तिम्रो न मेरो
            यो घर न तिम्रो न मेरो
            बाटो लाग्नै पर्यो
            बाटो लाग्नै पर्यो
            अल्झिएका कतै हामी दुवै
            तिमी न्यानो भन्दै, म माया भन्दै
            एकै ठाउँ छौँ हामी
            कतै भागी जाने लाग्दै छ मन
            हो-हो-हो-हो-हो, यो घर न तिम्रो न मेरो
            यो घर न तिम्रो न मेरो
            बाटो लाग्नै पर्यो
            बाटो लाग्नै पर्यो
            दे, रा-रे-रा, दा-रे-रा, दा-रा-रा
            दे, रा-रे-रा, दा-रे-रा, दा-रा-रा
            दे, रा-रे-रा, दा-रे-रा, दा-रा-रा
            दे, रा-रे-रा, दा-रे-रा, दा-रा-रा
            `,
      ENG: `
            Ma sangai udana gauthali
            Tadha najik jaha bhayeni
            Ma sangai udana gauthali
            Tadha najik jaha bhayeni

            Ekai chhin garana chirimiri
            K hola timro man bhari
            Yo ghar na timro na mero
            Yo ghar na timro na mero

            Bato lagnai paryo
            Bato lagnai paryo

            Aljhiyeka katai hami dubai
            Timi nyano bhandai, ma maya bhandai
            Ekai thaun chhau hami
            Katai bhagi jaane lagdaichha mann

            Ho ho-ho ho ho ho
            Yo ghar na timro na mero
            Yo ghar na timro na mero

            Bato lagnai paryo
            Bato lagnai paryo

            De ra re ra, ra re ra ra ra ra
            De ra re ra, ra re ra ra ra ra
            De ra re ra, ra re ra ra ra ra
            De ra re ra, ra re ra ra ra ra
            `,
    },
  },
  {
    id: 3,
    hasLyrics: false,
    artist: "Samriddhi Rai ft. Rohit John Chettri",
    track: "Prayas",
    image: "https://i1.sndcdn.com/artworks-000241490759-tt1m2b-t500x500.jpg",
  },
];
