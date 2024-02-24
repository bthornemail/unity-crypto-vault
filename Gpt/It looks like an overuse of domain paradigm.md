It looks like an overuse of domain paradigm

flowchart TD;

subgraph Entities
    Paradigm --> Person
    Person --> Peer
    Peer --> Connections
end
subgraph State
    Singleton --> Morphemes;
    Morphemes --> Lexemes;
    Lexemes --> Vocabulary;
    Vocabulary --> Lexicon;
    Lexicon --> Domain;

    Definition --> Vocabulary
    Vocabulary --> Glossary
    Glossary --> Encyclopedia
    Encyclopedia --> Domain

    Term --> Idea
    Idea --> Concept
    Concept --> Belief
    Belief --> Domain
end

subgraph Function
    Perceptron --> Monad;
    Monad --> Functor;
    Functor --> Morphology;
    Morphology --> Syntax;
    Syntax --> Semantics;
    Semantics --> Domain;
end
subgraph Implmentation
    Domain --> App
    Connections --> App
    Postulate --> App
    Proposition --> App
    Peer --> App
    Paradigm --> App 
end