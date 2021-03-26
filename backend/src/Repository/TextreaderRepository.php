<?php

namespace App\Repository;

use App\Entity\Textreader;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Textreader|null find($id, $lockMode = null, $lockVersion = null)
 * @method Textreader|null findOneBy(array $criteria, array $orderBy = null)
 * @method Textreader[]    findAll()
 * @method Textreader[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TextreaderRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Textreader::class);
    }

    // /**
    //  * @return Textreader[] Returns an array of Textreader objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('t.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Textreader
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
