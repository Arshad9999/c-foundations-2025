import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TopicsSection from "@/components/TopicsSection";
import QuestionsSection from "@/components/QuestionsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TopicsSection />
        <QuestionsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
